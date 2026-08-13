# `dataAwsccDatazonePolicyGrant` Submodule <a name="`dataAwsccDatazonePolicyGrant` Submodule" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccDatazonePolicyGrant <a name="DataAwsccDatazonePolicyGrant" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrant"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/datazone_policy_grant awscc_datazone_policy_grant}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrant.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_datazone_policy_grant

dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrant(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrant.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrant.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrant.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrant.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrant.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrant.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrant.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrant.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrant.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrant.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrant.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrant.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrant.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrant.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrant.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrant.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrant.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrant.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrant.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrant.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/datazone_policy_grant#id DataAwsccDatazonePolicyGrant#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrant.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrant.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrant.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrant.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrant.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrant.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrant.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrant.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrant.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrant.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrant.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrant.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrant.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrant.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrant.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrant.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrant.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrant.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrant.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrant.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrant.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrant.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrant.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrant.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrant.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrant.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrant.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrant.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrant.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrant.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrant.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrant.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrant.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrant.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrant.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrant.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrant.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrant.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrant.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrant.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrant.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrant.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrant.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrant.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrant.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrant.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrant.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrant.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrant.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrant.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrant.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrant.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrant.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrant.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccDatazonePolicyGrant resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrant.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_datazone_policy_grant

dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrant.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrant.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrant.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_datazone_policy_grant

dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrant.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrant.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrant.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_datazone_policy_grant

dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrant.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrant.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrant.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_datazone_policy_grant

dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrant.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccDatazonePolicyGrant resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrant.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrant.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccDatazonePolicyGrant to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrant.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccDatazonePolicyGrant that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/datazone_policy_grant#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrant.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccDatazonePolicyGrant to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrant.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrant.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrant.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrant.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrant.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrant.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrant.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrant.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrant.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrant.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrant.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrant.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrant.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrant.property.createdBy">created_by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrant.property.detail">detail</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOutputReference">DataAwsccDatazonePolicyGrantDetailOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrant.property.domainIdentifier">domain_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrant.property.entityIdentifier">entity_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrant.property.entityType">entity_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrant.property.grantId">grant_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrant.property.policyType">policy_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrant.property.principal">principal</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalOutputReference">DataAwsccDatazonePolicyGrantPrincipalOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrant.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrant.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrant.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrant.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrant.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrant.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrant.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrant.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrant.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrant.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrant.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrant.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrant.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrant.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrant.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `created_by`<sup>Required</sup> <a name="created_by" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrant.property.createdBy"></a>

```python
created_by: str
```

- *Type:* str

---

##### `detail`<sup>Required</sup> <a name="detail" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrant.property.detail"></a>

```python
detail: DataAwsccDatazonePolicyGrantDetailOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOutputReference">DataAwsccDatazonePolicyGrantDetailOutputReference</a>

---

##### `domain_identifier`<sup>Required</sup> <a name="domain_identifier" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrant.property.domainIdentifier"></a>

```python
domain_identifier: str
```

- *Type:* str

---

##### `entity_identifier`<sup>Required</sup> <a name="entity_identifier" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrant.property.entityIdentifier"></a>

```python
entity_identifier: str
```

- *Type:* str

---

##### `entity_type`<sup>Required</sup> <a name="entity_type" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrant.property.entityType"></a>

```python
entity_type: str
```

- *Type:* str

---

##### `grant_id`<sup>Required</sup> <a name="grant_id" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrant.property.grantId"></a>

```python
grant_id: str
```

- *Type:* str

---

##### `policy_type`<sup>Required</sup> <a name="policy_type" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrant.property.policyType"></a>

```python
policy_type: str
```

- *Type:* str

---

##### `principal`<sup>Required</sup> <a name="principal" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrant.property.principal"></a>

```python
principal: DataAwsccDatazonePolicyGrantPrincipalOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalOutputReference">DataAwsccDatazonePolicyGrantPrincipalOutputReference</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrant.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrant.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrant.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrant.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccDatazonePolicyGrantConfig <a name="DataAwsccDatazonePolicyGrantConfig" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_datazone_policy_grant

dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/datazone_policy_grant#id DataAwsccDatazonePolicyGrant#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccDatazonePolicyGrantDetail <a name="DataAwsccDatazonePolicyGrantDetail" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetail"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetail.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_datazone_policy_grant

dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetail()
```


### DataAwsccDatazonePolicyGrantDetailAddToProjectMemberPool <a name="DataAwsccDatazonePolicyGrantDetailAddToProjectMemberPool" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailAddToProjectMemberPool"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailAddToProjectMemberPool.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_datazone_policy_grant

dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailAddToProjectMemberPool()
```


### DataAwsccDatazonePolicyGrantDetailCreateAssetType <a name="DataAwsccDatazonePolicyGrantDetailCreateAssetType" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateAssetType"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateAssetType.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_datazone_policy_grant

dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateAssetType()
```


### DataAwsccDatazonePolicyGrantDetailCreateDomainUnit <a name="DataAwsccDatazonePolicyGrantDetailCreateDomainUnit" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateDomainUnit"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateDomainUnit.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_datazone_policy_grant

dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateDomainUnit()
```


### DataAwsccDatazonePolicyGrantDetailCreateEnvironmentProfile <a name="DataAwsccDatazonePolicyGrantDetailCreateEnvironmentProfile" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateEnvironmentProfile"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateEnvironmentProfile.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_datazone_policy_grant

dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateEnvironmentProfile()
```


### DataAwsccDatazonePolicyGrantDetailCreateFormType <a name="DataAwsccDatazonePolicyGrantDetailCreateFormType" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateFormType"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateFormType.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_datazone_policy_grant

dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateFormType()
```


### DataAwsccDatazonePolicyGrantDetailCreateGlossary <a name="DataAwsccDatazonePolicyGrantDetailCreateGlossary" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateGlossary"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateGlossary.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_datazone_policy_grant

dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateGlossary()
```


### DataAwsccDatazonePolicyGrantDetailCreateProject <a name="DataAwsccDatazonePolicyGrantDetailCreateProject" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateProject"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateProject.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_datazone_policy_grant

dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateProject()
```


### DataAwsccDatazonePolicyGrantDetailCreateProjectFromProjectProfile <a name="DataAwsccDatazonePolicyGrantDetailCreateProjectFromProjectProfile" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateProjectFromProjectProfile"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateProjectFromProjectProfile.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_datazone_policy_grant

dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateProjectFromProjectProfile()
```


### DataAwsccDatazonePolicyGrantDetailOverrideDomainUnitOwners <a name="DataAwsccDatazonePolicyGrantDetailOverrideDomainUnitOwners" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOverrideDomainUnitOwners"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOverrideDomainUnitOwners.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_datazone_policy_grant

dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOverrideDomainUnitOwners()
```


### DataAwsccDatazonePolicyGrantDetailOverrideProjectOwners <a name="DataAwsccDatazonePolicyGrantDetailOverrideProjectOwners" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOverrideProjectOwners"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOverrideProjectOwners.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_datazone_policy_grant

dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOverrideProjectOwners()
```


### DataAwsccDatazonePolicyGrantPrincipal <a name="DataAwsccDatazonePolicyGrantPrincipal" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipal"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipal.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_datazone_policy_grant

dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipal()
```


### DataAwsccDatazonePolicyGrantPrincipalDomainUnit <a name="DataAwsccDatazonePolicyGrantPrincipalDomainUnit" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalDomainUnit"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalDomainUnit.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_datazone_policy_grant

dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalDomainUnit()
```


### DataAwsccDatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilter <a name="DataAwsccDatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilter" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilter.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_datazone_policy_grant

dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilter()
```


### DataAwsccDatazonePolicyGrantPrincipalGroup <a name="DataAwsccDatazonePolicyGrantPrincipalGroup" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalGroup"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalGroup.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_datazone_policy_grant

dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalGroup()
```


### DataAwsccDatazonePolicyGrantPrincipalProject <a name="DataAwsccDatazonePolicyGrantPrincipalProject" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProject"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProject.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_datazone_policy_grant

dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProject()
```


### DataAwsccDatazonePolicyGrantPrincipalProjectProjectGrantFilter <a name="DataAwsccDatazonePolicyGrantPrincipalProjectProjectGrantFilter" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectProjectGrantFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectProjectGrantFilter.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_datazone_policy_grant

dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectProjectGrantFilter()
```


### DataAwsccDatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilter <a name="DataAwsccDatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilter" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilter.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_datazone_policy_grant

dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilter()
```


### DataAwsccDatazonePolicyGrantPrincipalUser <a name="DataAwsccDatazonePolicyGrantPrincipalUser" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalUser"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalUser.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_datazone_policy_grant

dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalUser()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccDatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference <a name="DataAwsccDatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_datazone_policy_grant

dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.property.includeChildDomainUnits">include_child_domain_units</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailAddToProjectMemberPool">DataAwsccDatazonePolicyGrantDetailAddToProjectMemberPool</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `include_child_domain_units`<sup>Required</sup> <a name="include_child_domain_units" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.property.includeChildDomainUnits"></a>

```python
include_child_domain_units: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccDatazonePolicyGrantDetailAddToProjectMemberPool
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailAddToProjectMemberPool">DataAwsccDatazonePolicyGrantDetailAddToProjectMemberPool</a>

---


### DataAwsccDatazonePolicyGrantDetailCreateAssetTypeOutputReference <a name="DataAwsccDatazonePolicyGrantDetailCreateAssetTypeOutputReference" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateAssetTypeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateAssetTypeOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_datazone_policy_grant

dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateAssetTypeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateAssetTypeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateAssetTypeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateAssetTypeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateAssetTypeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateAssetTypeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateAssetTypeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateAssetTypeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateAssetTypeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateAssetTypeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateAssetTypeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateAssetTypeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateAssetTypeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateAssetTypeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateAssetTypeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateAssetTypeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateAssetTypeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateAssetTypeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateAssetTypeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateAssetTypeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateAssetTypeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateAssetTypeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateAssetTypeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateAssetTypeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateAssetTypeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateAssetTypeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateAssetTypeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateAssetTypeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateAssetTypeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateAssetTypeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateAssetTypeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateAssetTypeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateAssetTypeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateAssetTypeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateAssetTypeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateAssetTypeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateAssetTypeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateAssetTypeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateAssetTypeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateAssetTypeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateAssetTypeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateAssetTypeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateAssetTypeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateAssetTypeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateAssetTypeOutputReference.property.includeChildDomainUnits">include_child_domain_units</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateAssetTypeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateAssetType">DataAwsccDatazonePolicyGrantDetailCreateAssetType</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateAssetTypeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateAssetTypeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `include_child_domain_units`<sup>Required</sup> <a name="include_child_domain_units" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateAssetTypeOutputReference.property.includeChildDomainUnits"></a>

```python
include_child_domain_units: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateAssetTypeOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccDatazonePolicyGrantDetailCreateAssetType
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateAssetType">DataAwsccDatazonePolicyGrantDetailCreateAssetType</a>

---


### DataAwsccDatazonePolicyGrantDetailCreateDomainUnitOutputReference <a name="DataAwsccDatazonePolicyGrantDetailCreateDomainUnitOutputReference" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateDomainUnitOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateDomainUnitOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_datazone_policy_grant

dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateDomainUnitOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateDomainUnitOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateDomainUnitOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateDomainUnitOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateDomainUnitOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateDomainUnitOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateDomainUnitOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateDomainUnitOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateDomainUnitOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateDomainUnitOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateDomainUnitOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateDomainUnitOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateDomainUnitOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateDomainUnitOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateDomainUnitOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateDomainUnitOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateDomainUnitOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateDomainUnitOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateDomainUnitOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateDomainUnitOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateDomainUnitOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateDomainUnitOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateDomainUnitOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateDomainUnitOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateDomainUnitOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateDomainUnitOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateDomainUnitOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateDomainUnitOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateDomainUnitOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateDomainUnitOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateDomainUnitOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateDomainUnitOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateDomainUnitOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateDomainUnitOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateDomainUnitOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateDomainUnitOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateDomainUnitOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateDomainUnitOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateDomainUnitOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateDomainUnitOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateDomainUnitOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateDomainUnitOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateDomainUnitOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateDomainUnitOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateDomainUnitOutputReference.property.includeChildDomainUnits">include_child_domain_units</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateDomainUnitOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateDomainUnit">DataAwsccDatazonePolicyGrantDetailCreateDomainUnit</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateDomainUnitOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateDomainUnitOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `include_child_domain_units`<sup>Required</sup> <a name="include_child_domain_units" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateDomainUnitOutputReference.property.includeChildDomainUnits"></a>

```python
include_child_domain_units: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateDomainUnitOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccDatazonePolicyGrantDetailCreateDomainUnit
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateDomainUnit">DataAwsccDatazonePolicyGrantDetailCreateDomainUnit</a>

---


### DataAwsccDatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference <a name="DataAwsccDatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_datazone_policy_grant

dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.property.domainUnitId">domain_unit_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateEnvironmentProfile">DataAwsccDatazonePolicyGrantDetailCreateEnvironmentProfile</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `domain_unit_id`<sup>Required</sup> <a name="domain_unit_id" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.property.domainUnitId"></a>

```python
domain_unit_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccDatazonePolicyGrantDetailCreateEnvironmentProfile
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateEnvironmentProfile">DataAwsccDatazonePolicyGrantDetailCreateEnvironmentProfile</a>

---


### DataAwsccDatazonePolicyGrantDetailCreateFormTypeOutputReference <a name="DataAwsccDatazonePolicyGrantDetailCreateFormTypeOutputReference" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateFormTypeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateFormTypeOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_datazone_policy_grant

dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateFormTypeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateFormTypeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateFormTypeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateFormTypeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateFormTypeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateFormTypeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateFormTypeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateFormTypeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateFormTypeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateFormTypeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateFormTypeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateFormTypeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateFormTypeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateFormTypeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateFormTypeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateFormTypeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateFormTypeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateFormTypeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateFormTypeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateFormTypeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateFormTypeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateFormTypeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateFormTypeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateFormTypeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateFormTypeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateFormTypeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateFormTypeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateFormTypeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateFormTypeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateFormTypeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateFormTypeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateFormTypeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateFormTypeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateFormTypeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateFormTypeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateFormTypeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateFormTypeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateFormTypeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateFormTypeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateFormTypeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateFormTypeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateFormTypeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateFormTypeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateFormTypeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateFormTypeOutputReference.property.includeChildDomainUnits">include_child_domain_units</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateFormTypeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateFormType">DataAwsccDatazonePolicyGrantDetailCreateFormType</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateFormTypeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateFormTypeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `include_child_domain_units`<sup>Required</sup> <a name="include_child_domain_units" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateFormTypeOutputReference.property.includeChildDomainUnits"></a>

```python
include_child_domain_units: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateFormTypeOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccDatazonePolicyGrantDetailCreateFormType
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateFormType">DataAwsccDatazonePolicyGrantDetailCreateFormType</a>

---


### DataAwsccDatazonePolicyGrantDetailCreateGlossaryOutputReference <a name="DataAwsccDatazonePolicyGrantDetailCreateGlossaryOutputReference" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateGlossaryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateGlossaryOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_datazone_policy_grant

dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateGlossaryOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateGlossaryOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateGlossaryOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateGlossaryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateGlossaryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateGlossaryOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateGlossaryOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateGlossaryOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateGlossaryOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateGlossaryOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateGlossaryOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateGlossaryOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateGlossaryOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateGlossaryOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateGlossaryOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateGlossaryOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateGlossaryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateGlossaryOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateGlossaryOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateGlossaryOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateGlossaryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateGlossaryOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateGlossaryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateGlossaryOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateGlossaryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateGlossaryOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateGlossaryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateGlossaryOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateGlossaryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateGlossaryOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateGlossaryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateGlossaryOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateGlossaryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateGlossaryOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateGlossaryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateGlossaryOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateGlossaryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateGlossaryOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateGlossaryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateGlossaryOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateGlossaryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateGlossaryOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateGlossaryOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateGlossaryOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateGlossaryOutputReference.property.includeChildDomainUnits">include_child_domain_units</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateGlossaryOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateGlossary">DataAwsccDatazonePolicyGrantDetailCreateGlossary</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateGlossaryOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateGlossaryOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `include_child_domain_units`<sup>Required</sup> <a name="include_child_domain_units" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateGlossaryOutputReference.property.includeChildDomainUnits"></a>

```python
include_child_domain_units: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateGlossaryOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccDatazonePolicyGrantDetailCreateGlossary
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateGlossary">DataAwsccDatazonePolicyGrantDetailCreateGlossary</a>

---


### DataAwsccDatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference <a name="DataAwsccDatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_datazone_policy_grant

dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.property.includeChildDomainUnits">include_child_domain_units</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.property.projectProfiles">project_profiles</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateProjectFromProjectProfile">DataAwsccDatazonePolicyGrantDetailCreateProjectFromProjectProfile</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `include_child_domain_units`<sup>Required</sup> <a name="include_child_domain_units" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.property.includeChildDomainUnits"></a>

```python
include_child_domain_units: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `project_profiles`<sup>Required</sup> <a name="project_profiles" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.property.projectProfiles"></a>

```python
project_profiles: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccDatazonePolicyGrantDetailCreateProjectFromProjectProfile
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateProjectFromProjectProfile">DataAwsccDatazonePolicyGrantDetailCreateProjectFromProjectProfile</a>

---


### DataAwsccDatazonePolicyGrantDetailCreateProjectOutputReference <a name="DataAwsccDatazonePolicyGrantDetailCreateProjectOutputReference" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateProjectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateProjectOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_datazone_policy_grant

dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateProjectOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateProjectOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateProjectOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateProjectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateProjectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateProjectOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateProjectOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateProjectOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateProjectOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateProjectOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateProjectOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateProjectOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateProjectOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateProjectOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateProjectOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateProjectOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateProjectOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateProjectOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateProjectOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateProjectOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateProjectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateProjectOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateProjectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateProjectOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateProjectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateProjectOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateProjectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateProjectOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateProjectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateProjectOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateProjectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateProjectOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateProjectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateProjectOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateProjectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateProjectOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateProjectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateProjectOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateProjectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateProjectOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateProjectOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateProjectOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateProjectOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateProjectOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateProjectOutputReference.property.includeChildDomainUnits">include_child_domain_units</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateProjectOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateProject">DataAwsccDatazonePolicyGrantDetailCreateProject</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateProjectOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateProjectOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `include_child_domain_units`<sup>Required</sup> <a name="include_child_domain_units" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateProjectOutputReference.property.includeChildDomainUnits"></a>

```python
include_child_domain_units: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateProjectOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccDatazonePolicyGrantDetailCreateProject
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateProject">DataAwsccDatazonePolicyGrantDetailCreateProject</a>

---


### DataAwsccDatazonePolicyGrantDetailOutputReference <a name="DataAwsccDatazonePolicyGrantDetailOutputReference" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_datazone_policy_grant

dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOutputReference.property.addToProjectMemberPool">add_to_project_member_pool</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference">DataAwsccDatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOutputReference.property.createAssetType">create_asset_type</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateAssetTypeOutputReference">DataAwsccDatazonePolicyGrantDetailCreateAssetTypeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOutputReference.property.createDomainUnit">create_domain_unit</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateDomainUnitOutputReference">DataAwsccDatazonePolicyGrantDetailCreateDomainUnitOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOutputReference.property.createEnvironment">create_environment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOutputReference.property.createEnvironmentFromBlueprint">create_environment_from_blueprint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOutputReference.property.createEnvironmentProfile">create_environment_profile</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference">DataAwsccDatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOutputReference.property.createFormType">create_form_type</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateFormTypeOutputReference">DataAwsccDatazonePolicyGrantDetailCreateFormTypeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOutputReference.property.createGlossary">create_glossary</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateGlossaryOutputReference">DataAwsccDatazonePolicyGrantDetailCreateGlossaryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOutputReference.property.createProject">create_project</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateProjectOutputReference">DataAwsccDatazonePolicyGrantDetailCreateProjectOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOutputReference.property.createProjectFromProjectProfile">create_project_from_project_profile</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference">DataAwsccDatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOutputReference.property.delegateCreateEnvironmentProfile">delegate_create_environment_profile</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOutputReference.property.overrideDomainUnitOwners">override_domain_unit_owners</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference">DataAwsccDatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOutputReference.property.overrideProjectOwners">override_project_owners</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOverrideProjectOwnersOutputReference">DataAwsccDatazonePolicyGrantDetailOverrideProjectOwnersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetail">DataAwsccDatazonePolicyGrantDetail</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `add_to_project_member_pool`<sup>Required</sup> <a name="add_to_project_member_pool" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOutputReference.property.addToProjectMemberPool"></a>

```python
add_to_project_member_pool: DataAwsccDatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference">DataAwsccDatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference</a>

---

##### `create_asset_type`<sup>Required</sup> <a name="create_asset_type" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOutputReference.property.createAssetType"></a>

```python
create_asset_type: DataAwsccDatazonePolicyGrantDetailCreateAssetTypeOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateAssetTypeOutputReference">DataAwsccDatazonePolicyGrantDetailCreateAssetTypeOutputReference</a>

---

##### `create_domain_unit`<sup>Required</sup> <a name="create_domain_unit" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOutputReference.property.createDomainUnit"></a>

```python
create_domain_unit: DataAwsccDatazonePolicyGrantDetailCreateDomainUnitOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateDomainUnitOutputReference">DataAwsccDatazonePolicyGrantDetailCreateDomainUnitOutputReference</a>

---

##### `create_environment`<sup>Required</sup> <a name="create_environment" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOutputReference.property.createEnvironment"></a>

```python
create_environment: str
```

- *Type:* str

---

##### `create_environment_from_blueprint`<sup>Required</sup> <a name="create_environment_from_blueprint" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOutputReference.property.createEnvironmentFromBlueprint"></a>

```python
create_environment_from_blueprint: str
```

- *Type:* str

---

##### `create_environment_profile`<sup>Required</sup> <a name="create_environment_profile" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOutputReference.property.createEnvironmentProfile"></a>

```python
create_environment_profile: DataAwsccDatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference">DataAwsccDatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference</a>

---

##### `create_form_type`<sup>Required</sup> <a name="create_form_type" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOutputReference.property.createFormType"></a>

```python
create_form_type: DataAwsccDatazonePolicyGrantDetailCreateFormTypeOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateFormTypeOutputReference">DataAwsccDatazonePolicyGrantDetailCreateFormTypeOutputReference</a>

---

##### `create_glossary`<sup>Required</sup> <a name="create_glossary" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOutputReference.property.createGlossary"></a>

```python
create_glossary: DataAwsccDatazonePolicyGrantDetailCreateGlossaryOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateGlossaryOutputReference">DataAwsccDatazonePolicyGrantDetailCreateGlossaryOutputReference</a>

---

##### `create_project`<sup>Required</sup> <a name="create_project" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOutputReference.property.createProject"></a>

```python
create_project: DataAwsccDatazonePolicyGrantDetailCreateProjectOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateProjectOutputReference">DataAwsccDatazonePolicyGrantDetailCreateProjectOutputReference</a>

---

##### `create_project_from_project_profile`<sup>Required</sup> <a name="create_project_from_project_profile" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOutputReference.property.createProjectFromProjectProfile"></a>

```python
create_project_from_project_profile: DataAwsccDatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference">DataAwsccDatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference</a>

---

##### `delegate_create_environment_profile`<sup>Required</sup> <a name="delegate_create_environment_profile" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOutputReference.property.delegateCreateEnvironmentProfile"></a>

```python
delegate_create_environment_profile: str
```

- *Type:* str

---

##### `override_domain_unit_owners`<sup>Required</sup> <a name="override_domain_unit_owners" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOutputReference.property.overrideDomainUnitOwners"></a>

```python
override_domain_unit_owners: DataAwsccDatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference">DataAwsccDatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference</a>

---

##### `override_project_owners`<sup>Required</sup> <a name="override_project_owners" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOutputReference.property.overrideProjectOwners"></a>

```python
override_project_owners: DataAwsccDatazonePolicyGrantDetailOverrideProjectOwnersOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOverrideProjectOwnersOutputReference">DataAwsccDatazonePolicyGrantDetailOverrideProjectOwnersOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccDatazonePolicyGrantDetail
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetail">DataAwsccDatazonePolicyGrantDetail</a>

---


### DataAwsccDatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference <a name="DataAwsccDatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_datazone_policy_grant

dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.property.includeChildDomainUnits">include_child_domain_units</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOverrideDomainUnitOwners">DataAwsccDatazonePolicyGrantDetailOverrideDomainUnitOwners</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `include_child_domain_units`<sup>Required</sup> <a name="include_child_domain_units" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.property.includeChildDomainUnits"></a>

```python
include_child_domain_units: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccDatazonePolicyGrantDetailOverrideDomainUnitOwners
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOverrideDomainUnitOwners">DataAwsccDatazonePolicyGrantDetailOverrideDomainUnitOwners</a>

---


### DataAwsccDatazonePolicyGrantDetailOverrideProjectOwnersOutputReference <a name="DataAwsccDatazonePolicyGrantDetailOverrideProjectOwnersOutputReference" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOverrideProjectOwnersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_datazone_policy_grant

dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOverrideProjectOwnersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.property.includeChildDomainUnits">include_child_domain_units</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOverrideProjectOwners">DataAwsccDatazonePolicyGrantDetailOverrideProjectOwners</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `include_child_domain_units`<sup>Required</sup> <a name="include_child_domain_units" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.property.includeChildDomainUnits"></a>

```python
include_child_domain_units: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccDatazonePolicyGrantDetailOverrideProjectOwners
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantDetailOverrideProjectOwners">DataAwsccDatazonePolicyGrantDetailOverrideProjectOwners</a>

---


### DataAwsccDatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilterOutputReference <a name="DataAwsccDatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilterOutputReference" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilterOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_datazone_policy_grant

dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilterOutputReference.property.allDomainUnitsGrantFilter">all_domain_units_grant_filter</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilterOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilter">DataAwsccDatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilter</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `all_domain_units_grant_filter`<sup>Required</sup> <a name="all_domain_units_grant_filter" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilterOutputReference.property.allDomainUnitsGrantFilter"></a>

```python
all_domain_units_grant_filter: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilterOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccDatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilter
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilter">DataAwsccDatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilter</a>

---


### DataAwsccDatazonePolicyGrantPrincipalDomainUnitOutputReference <a name="DataAwsccDatazonePolicyGrantPrincipalDomainUnitOutputReference" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalDomainUnitOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalDomainUnitOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_datazone_policy_grant

dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalDomainUnitOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalDomainUnitOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalDomainUnitOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalDomainUnitOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalDomainUnitOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalDomainUnitOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalDomainUnitOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalDomainUnitOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalDomainUnitOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalDomainUnitOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalDomainUnitOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalDomainUnitOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalDomainUnitOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalDomainUnitOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalDomainUnitOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalDomainUnitOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalDomainUnitOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalDomainUnitOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalDomainUnitOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalDomainUnitOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalDomainUnitOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalDomainUnitOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalDomainUnitOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalDomainUnitOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalDomainUnitOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalDomainUnitOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalDomainUnitOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalDomainUnitOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalDomainUnitOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalDomainUnitOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalDomainUnitOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalDomainUnitOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalDomainUnitOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalDomainUnitOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalDomainUnitOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalDomainUnitOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalDomainUnitOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalDomainUnitOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalDomainUnitOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalDomainUnitOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalDomainUnitOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalDomainUnitOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalDomainUnitOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalDomainUnitOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalDomainUnitOutputReference.property.domainUnitDesignation">domain_unit_designation</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalDomainUnitOutputReference.property.domainUnitGrantFilter">domain_unit_grant_filter</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilterOutputReference">DataAwsccDatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalDomainUnitOutputReference.property.domainUnitIdentifier">domain_unit_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalDomainUnitOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalDomainUnit">DataAwsccDatazonePolicyGrantPrincipalDomainUnit</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalDomainUnitOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalDomainUnitOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `domain_unit_designation`<sup>Required</sup> <a name="domain_unit_designation" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalDomainUnitOutputReference.property.domainUnitDesignation"></a>

```python
domain_unit_designation: str
```

- *Type:* str

---

##### `domain_unit_grant_filter`<sup>Required</sup> <a name="domain_unit_grant_filter" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalDomainUnitOutputReference.property.domainUnitGrantFilter"></a>

```python
domain_unit_grant_filter: DataAwsccDatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilterOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilterOutputReference">DataAwsccDatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilterOutputReference</a>

---

##### `domain_unit_identifier`<sup>Required</sup> <a name="domain_unit_identifier" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalDomainUnitOutputReference.property.domainUnitIdentifier"></a>

```python
domain_unit_identifier: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalDomainUnitOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccDatazonePolicyGrantPrincipalDomainUnit
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalDomainUnit">DataAwsccDatazonePolicyGrantPrincipalDomainUnit</a>

---


### DataAwsccDatazonePolicyGrantPrincipalGroupOutputReference <a name="DataAwsccDatazonePolicyGrantPrincipalGroupOutputReference" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalGroupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalGroupOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_datazone_policy_grant

dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalGroupOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalGroupOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalGroupOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalGroupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalGroupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalGroupOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalGroupOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalGroupOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalGroupOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalGroupOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalGroupOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalGroupOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalGroupOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalGroupOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalGroupOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalGroupOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalGroupOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalGroupOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalGroupOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalGroupOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalGroupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalGroupOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalGroupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalGroupOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalGroupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalGroupOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalGroupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalGroupOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalGroupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalGroupOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalGroupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalGroupOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalGroupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalGroupOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalGroupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalGroupOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalGroupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalGroupOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalGroupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalGroupOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalGroupOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalGroupOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalGroupOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalGroupOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalGroupOutputReference.property.groupIdentifier">group_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalGroupOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalGroup">DataAwsccDatazonePolicyGrantPrincipalGroup</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalGroupOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalGroupOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `group_identifier`<sup>Required</sup> <a name="group_identifier" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalGroupOutputReference.property.groupIdentifier"></a>

```python
group_identifier: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalGroupOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccDatazonePolicyGrantPrincipalGroup
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalGroup">DataAwsccDatazonePolicyGrantPrincipalGroup</a>

---


### DataAwsccDatazonePolicyGrantPrincipalOutputReference <a name="DataAwsccDatazonePolicyGrantPrincipalOutputReference" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_datazone_policy_grant

dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalOutputReference.property.domainUnit">domain_unit</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalDomainUnitOutputReference">DataAwsccDatazonePolicyGrantPrincipalDomainUnitOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalOutputReference.property.group">group</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalGroupOutputReference">DataAwsccDatazonePolicyGrantPrincipalGroupOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalOutputReference.property.project">project</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectOutputReference">DataAwsccDatazonePolicyGrantPrincipalProjectOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalOutputReference.property.user">user</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalUserOutputReference">DataAwsccDatazonePolicyGrantPrincipalUserOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipal">DataAwsccDatazonePolicyGrantPrincipal</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `domain_unit`<sup>Required</sup> <a name="domain_unit" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalOutputReference.property.domainUnit"></a>

```python
domain_unit: DataAwsccDatazonePolicyGrantPrincipalDomainUnitOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalDomainUnitOutputReference">DataAwsccDatazonePolicyGrantPrincipalDomainUnitOutputReference</a>

---

##### `group`<sup>Required</sup> <a name="group" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalOutputReference.property.group"></a>

```python
group: DataAwsccDatazonePolicyGrantPrincipalGroupOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalGroupOutputReference">DataAwsccDatazonePolicyGrantPrincipalGroupOutputReference</a>

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalOutputReference.property.project"></a>

```python
project: DataAwsccDatazonePolicyGrantPrincipalProjectOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectOutputReference">DataAwsccDatazonePolicyGrantPrincipalProjectOutputReference</a>

---

##### `user`<sup>Required</sup> <a name="user" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalOutputReference.property.user"></a>

```python
user: DataAwsccDatazonePolicyGrantPrincipalUserOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalUserOutputReference">DataAwsccDatazonePolicyGrantPrincipalUserOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccDatazonePolicyGrantPrincipal
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipal">DataAwsccDatazonePolicyGrantPrincipal</a>

---


### DataAwsccDatazonePolicyGrantPrincipalProjectOutputReference <a name="DataAwsccDatazonePolicyGrantPrincipalProjectOutputReference" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_datazone_policy_grant

dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectOutputReference.property.projectDesignation">project_designation</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectOutputReference.property.projectGrantFilter">project_grant_filter</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectProjectGrantFilterOutputReference">DataAwsccDatazonePolicyGrantPrincipalProjectProjectGrantFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectOutputReference.property.projectIdentifier">project_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProject">DataAwsccDatazonePolicyGrantPrincipalProject</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `project_designation`<sup>Required</sup> <a name="project_designation" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectOutputReference.property.projectDesignation"></a>

```python
project_designation: str
```

- *Type:* str

---

##### `project_grant_filter`<sup>Required</sup> <a name="project_grant_filter" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectOutputReference.property.projectGrantFilter"></a>

```python
project_grant_filter: DataAwsccDatazonePolicyGrantPrincipalProjectProjectGrantFilterOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectProjectGrantFilterOutputReference">DataAwsccDatazonePolicyGrantPrincipalProjectProjectGrantFilterOutputReference</a>

---

##### `project_identifier`<sup>Required</sup> <a name="project_identifier" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectOutputReference.property.projectIdentifier"></a>

```python
project_identifier: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccDatazonePolicyGrantPrincipalProject
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProject">DataAwsccDatazonePolicyGrantPrincipalProject</a>

---


### DataAwsccDatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilterOutputReference <a name="DataAwsccDatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilterOutputReference" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilterOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_datazone_policy_grant

dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilterOutputReference.property.domainUnit">domain_unit</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilterOutputReference.property.includeChildDomainUnits">include_child_domain_units</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilterOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilter">DataAwsccDatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilter</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `domain_unit`<sup>Required</sup> <a name="domain_unit" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilterOutputReference.property.domainUnit"></a>

```python
domain_unit: str
```

- *Type:* str

---

##### `include_child_domain_units`<sup>Required</sup> <a name="include_child_domain_units" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilterOutputReference.property.includeChildDomainUnits"></a>

```python
include_child_domain_units: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilterOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccDatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilter
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilter">DataAwsccDatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilter</a>

---


### DataAwsccDatazonePolicyGrantPrincipalProjectProjectGrantFilterOutputReference <a name="DataAwsccDatazonePolicyGrantPrincipalProjectProjectGrantFilterOutputReference" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectProjectGrantFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectProjectGrantFilterOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_datazone_policy_grant

dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectProjectGrantFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectProjectGrantFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectProjectGrantFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectProjectGrantFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectProjectGrantFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectProjectGrantFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectProjectGrantFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectProjectGrantFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectProjectGrantFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectProjectGrantFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectProjectGrantFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectProjectGrantFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectProjectGrantFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectProjectGrantFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectProjectGrantFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectProjectGrantFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectProjectGrantFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectProjectGrantFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectProjectGrantFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectProjectGrantFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectProjectGrantFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectProjectGrantFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectProjectGrantFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectProjectGrantFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectProjectGrantFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectProjectGrantFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectProjectGrantFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectProjectGrantFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectProjectGrantFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectProjectGrantFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectProjectGrantFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectProjectGrantFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectProjectGrantFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectProjectGrantFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectProjectGrantFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectProjectGrantFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectProjectGrantFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectProjectGrantFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectProjectGrantFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectProjectGrantFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectProjectGrantFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectProjectGrantFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectProjectGrantFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectProjectGrantFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectProjectGrantFilterOutputReference.property.domainUnitFilter">domain_unit_filter</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilterOutputReference">DataAwsccDatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectProjectGrantFilterOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectProjectGrantFilter">DataAwsccDatazonePolicyGrantPrincipalProjectProjectGrantFilter</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectProjectGrantFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectProjectGrantFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `domain_unit_filter`<sup>Required</sup> <a name="domain_unit_filter" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectProjectGrantFilterOutputReference.property.domainUnitFilter"></a>

```python
domain_unit_filter: DataAwsccDatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilterOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilterOutputReference">DataAwsccDatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilterOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectProjectGrantFilterOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccDatazonePolicyGrantPrincipalProjectProjectGrantFilter
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalProjectProjectGrantFilter">DataAwsccDatazonePolicyGrantPrincipalProjectProjectGrantFilter</a>

---


### DataAwsccDatazonePolicyGrantPrincipalUserOutputReference <a name="DataAwsccDatazonePolicyGrantPrincipalUserOutputReference" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalUserOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalUserOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_datazone_policy_grant

dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalUserOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalUserOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalUserOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalUserOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalUserOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalUserOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalUserOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalUserOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalUserOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalUserOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalUserOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalUserOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalUserOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalUserOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalUserOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalUserOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalUserOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalUserOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalUserOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalUserOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalUserOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalUserOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalUserOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalUserOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalUserOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalUserOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalUserOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalUserOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalUserOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalUserOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalUserOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalUserOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalUserOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalUserOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalUserOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalUserOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalUserOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalUserOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalUserOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalUserOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalUserOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalUserOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalUserOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalUserOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalUserOutputReference.property.allUsersGrantFilter">all_users_grant_filter</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalUserOutputReference.property.userIdentifier">user_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalUserOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalUser">DataAwsccDatazonePolicyGrantPrincipalUser</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalUserOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalUserOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `all_users_grant_filter`<sup>Required</sup> <a name="all_users_grant_filter" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalUserOutputReference.property.allUsersGrantFilter"></a>

```python
all_users_grant_filter: str
```

- *Type:* str

---

##### `user_identifier`<sup>Required</sup> <a name="user_identifier" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalUserOutputReference.property.userIdentifier"></a>

```python
user_identifier: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalUserOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccDatazonePolicyGrantPrincipalUser
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazonePolicyGrant.DataAwsccDatazonePolicyGrantPrincipalUser">DataAwsccDatazonePolicyGrantPrincipalUser</a>

---



