# `dataAwsccVpclatticeRule` Submodule <a name="`dataAwsccVpclatticeRule` Submodule" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccVpclatticeRule <a name="DataAwsccVpclatticeRule" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/vpclattice_rule awscc_vpclattice_rule}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRule.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_vpclattice_rule

dataAwsccVpclatticeRule.DataAwsccVpclatticeRule(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRule.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRule.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRule.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRule.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRule.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRule.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRule.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRule.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRule.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRule.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRule.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRule.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRule.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRule.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRule.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRule.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRule.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/vpclattice_rule#id DataAwsccVpclatticeRule#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRule.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRule.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRule.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRule.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRule.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRule.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRule.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRule.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRule.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRule.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRule.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRule.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRule.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRule.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRule.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRule.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRule.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRule.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRule.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRule.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRule.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRule.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRule.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRule.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRule.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRule.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRule.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRule.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRule.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRule.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRule.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRule.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRule.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRule.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRule.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRule.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRule.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRule.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRule.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRule.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRule.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRule.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRule.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccVpclatticeRule resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRule.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_vpclattice_rule

dataAwsccVpclatticeRule.DataAwsccVpclatticeRule.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRule.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRule.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_vpclattice_rule

dataAwsccVpclatticeRule.DataAwsccVpclatticeRule.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRule.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRule.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_vpclattice_rule

dataAwsccVpclatticeRule.DataAwsccVpclatticeRule.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRule.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRule.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_vpclattice_rule

dataAwsccVpclatticeRule.DataAwsccVpclatticeRule.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccVpclatticeRule resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccVpclatticeRule to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccVpclatticeRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/vpclattice_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccVpclatticeRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRule.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRule.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRule.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRule.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRule.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRule.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRule.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRule.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRule.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRule.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRule.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRule.property.action">action</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionOutputReference">DataAwsccVpclatticeRuleActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRule.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRule.property.listenerIdentifier">listener_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRule.property.match">match</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchOutputReference">DataAwsccVpclatticeRuleMatchOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRule.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRule.property.priority">priority</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRule.property.ruleId">rule_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRule.property.serviceIdentifier">service_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRule.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleTagsList">DataAwsccVpclatticeRuleTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRule.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRule.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRule.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRule.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRule.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRule.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRule.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRule.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRule.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRule.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRule.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRule.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRule.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRule.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRule.property.action"></a>

```python
action: DataAwsccVpclatticeRuleActionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionOutputReference">DataAwsccVpclatticeRuleActionOutputReference</a>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRule.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `listener_identifier`<sup>Required</sup> <a name="listener_identifier" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRule.property.listenerIdentifier"></a>

```python
listener_identifier: str
```

- *Type:* str

---

##### `match`<sup>Required</sup> <a name="match" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRule.property.match"></a>

```python
match: DataAwsccVpclatticeRuleMatchOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchOutputReference">DataAwsccVpclatticeRuleMatchOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRule.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRule.property.priority"></a>

```python
priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `rule_id`<sup>Required</sup> <a name="rule_id" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRule.property.ruleId"></a>

```python
rule_id: str
```

- *Type:* str

---

##### `service_identifier`<sup>Required</sup> <a name="service_identifier" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRule.property.serviceIdentifier"></a>

```python
service_identifier: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRule.property.tags"></a>

```python
tags: DataAwsccVpclatticeRuleTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleTagsList">DataAwsccVpclatticeRuleTagsList</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRule.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRule.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRule.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRule.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccVpclatticeRuleAction <a name="DataAwsccVpclatticeRuleAction" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleAction"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleAction.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_vpclattice_rule

dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleAction()
```


### DataAwsccVpclatticeRuleActionFixedResponse <a name="DataAwsccVpclatticeRuleActionFixedResponse" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionFixedResponse"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionFixedResponse.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_vpclattice_rule

dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionFixedResponse()
```


### DataAwsccVpclatticeRuleActionForward <a name="DataAwsccVpclatticeRuleActionForward" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionForward"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionForward.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_vpclattice_rule

dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionForward()
```


### DataAwsccVpclatticeRuleActionForwardTargetGroups <a name="DataAwsccVpclatticeRuleActionForwardTargetGroups" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionForwardTargetGroups"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionForwardTargetGroups.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_vpclattice_rule

dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionForwardTargetGroups()
```


### DataAwsccVpclatticeRuleConfig <a name="DataAwsccVpclatticeRuleConfig" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_vpclattice_rule

dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/vpclattice_rule#id DataAwsccVpclatticeRule#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccVpclatticeRuleMatch <a name="DataAwsccVpclatticeRuleMatch" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatch"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatch.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_vpclattice_rule

dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatch()
```


### DataAwsccVpclatticeRuleMatchHttpMatch <a name="DataAwsccVpclatticeRuleMatchHttpMatch" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatch"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatch.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_vpclattice_rule

dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatch()
```


### DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatches <a name="DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatches" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatches"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatches.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_vpclattice_rule

dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatches()
```


### DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesMatch <a name="DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesMatch" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesMatch"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesMatch.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_vpclattice_rule

dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesMatch()
```


### DataAwsccVpclatticeRuleMatchHttpMatchPathMatch <a name="DataAwsccVpclatticeRuleMatchHttpMatchPathMatch" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchPathMatch"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchPathMatch.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_vpclattice_rule

dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchPathMatch()
```


### DataAwsccVpclatticeRuleMatchHttpMatchPathMatchMatch <a name="DataAwsccVpclatticeRuleMatchHttpMatchPathMatchMatch" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchPathMatchMatch"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchPathMatchMatch.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_vpclattice_rule

dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchPathMatchMatch()
```


### DataAwsccVpclatticeRuleTags <a name="DataAwsccVpclatticeRuleTags" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleTags.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_vpclattice_rule

dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleTags()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccVpclatticeRuleActionFixedResponseOutputReference <a name="DataAwsccVpclatticeRuleActionFixedResponseOutputReference" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionFixedResponseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionFixedResponseOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_vpclattice_rule

dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionFixedResponseOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionFixedResponseOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionFixedResponseOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionFixedResponseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionFixedResponseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionFixedResponseOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionFixedResponseOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionFixedResponseOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionFixedResponseOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionFixedResponseOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionFixedResponseOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionFixedResponseOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionFixedResponseOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionFixedResponseOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionFixedResponseOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionFixedResponseOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionFixedResponseOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionFixedResponseOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionFixedResponseOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionFixedResponseOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionFixedResponseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionFixedResponseOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionFixedResponseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionFixedResponseOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionFixedResponseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionFixedResponseOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionFixedResponseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionFixedResponseOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionFixedResponseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionFixedResponseOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionFixedResponseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionFixedResponseOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionFixedResponseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionFixedResponseOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionFixedResponseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionFixedResponseOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionFixedResponseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionFixedResponseOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionFixedResponseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionFixedResponseOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionFixedResponseOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionFixedResponseOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionFixedResponseOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionFixedResponseOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionFixedResponseOutputReference.property.statusCode">status_code</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionFixedResponseOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionFixedResponse">DataAwsccVpclatticeRuleActionFixedResponse</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionFixedResponseOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionFixedResponseOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `status_code`<sup>Required</sup> <a name="status_code" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionFixedResponseOutputReference.property.statusCode"></a>

```python
status_code: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionFixedResponseOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccVpclatticeRuleActionFixedResponse
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionFixedResponse">DataAwsccVpclatticeRuleActionFixedResponse</a>

---


### DataAwsccVpclatticeRuleActionForwardOutputReference <a name="DataAwsccVpclatticeRuleActionForwardOutputReference" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionForwardOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionForwardOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_vpclattice_rule

dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionForwardOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionForwardOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionForwardOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionForwardOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionForwardOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionForwardOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionForwardOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionForwardOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionForwardOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionForwardOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionForwardOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionForwardOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionForwardOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionForwardOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionForwardOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionForwardOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionForwardOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionForwardOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionForwardOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionForwardOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionForwardOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionForwardOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionForwardOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionForwardOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionForwardOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionForwardOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionForwardOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionForwardOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionForwardOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionForwardOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionForwardOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionForwardOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionForwardOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionForwardOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionForwardOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionForwardOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionForwardOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionForwardOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionForwardOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionForwardOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionForwardOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionForwardOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionForwardOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionForwardOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionForwardOutputReference.property.targetGroups">target_groups</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionForwardTargetGroupsList">DataAwsccVpclatticeRuleActionForwardTargetGroupsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionForwardOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionForward">DataAwsccVpclatticeRuleActionForward</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionForwardOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionForwardOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `target_groups`<sup>Required</sup> <a name="target_groups" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionForwardOutputReference.property.targetGroups"></a>

```python
target_groups: DataAwsccVpclatticeRuleActionForwardTargetGroupsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionForwardTargetGroupsList">DataAwsccVpclatticeRuleActionForwardTargetGroupsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionForwardOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccVpclatticeRuleActionForward
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionForward">DataAwsccVpclatticeRuleActionForward</a>

---


### DataAwsccVpclatticeRuleActionForwardTargetGroupsList <a name="DataAwsccVpclatticeRuleActionForwardTargetGroupsList" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionForwardTargetGroupsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionForwardTargetGroupsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_vpclattice_rule

dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionForwardTargetGroupsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionForwardTargetGroupsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionForwardTargetGroupsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionForwardTargetGroupsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionForwardTargetGroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionForwardTargetGroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionForwardTargetGroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionForwardTargetGroupsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionForwardTargetGroupsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionForwardTargetGroupsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionForwardTargetGroupsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionForwardTargetGroupsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionForwardTargetGroupsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionForwardTargetGroupsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionForwardTargetGroupsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionForwardTargetGroupsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionForwardTargetGroupsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionForwardTargetGroupsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionForwardTargetGroupsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccVpclatticeRuleActionForwardTargetGroupsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionForwardTargetGroupsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionForwardTargetGroupsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionForwardTargetGroupsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionForwardTargetGroupsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionForwardTargetGroupsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccVpclatticeRuleActionForwardTargetGroupsOutputReference <a name="DataAwsccVpclatticeRuleActionForwardTargetGroupsOutputReference" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionForwardTargetGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionForwardTargetGroupsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_vpclattice_rule

dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionForwardTargetGroupsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionForwardTargetGroupsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionForwardTargetGroupsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionForwardTargetGroupsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionForwardTargetGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionForwardTargetGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionForwardTargetGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionForwardTargetGroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionForwardTargetGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionForwardTargetGroupsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionForwardTargetGroupsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionForwardTargetGroupsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionForwardTargetGroupsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionForwardTargetGroupsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionForwardTargetGroupsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionForwardTargetGroupsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionForwardTargetGroupsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionForwardTargetGroupsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionForwardTargetGroupsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionForwardTargetGroupsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionForwardTargetGroupsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionForwardTargetGroupsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionForwardTargetGroupsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionForwardTargetGroupsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionForwardTargetGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionForwardTargetGroupsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionForwardTargetGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionForwardTargetGroupsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionForwardTargetGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionForwardTargetGroupsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionForwardTargetGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionForwardTargetGroupsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionForwardTargetGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionForwardTargetGroupsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionForwardTargetGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionForwardTargetGroupsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionForwardTargetGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionForwardTargetGroupsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionForwardTargetGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionForwardTargetGroupsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionForwardTargetGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionForwardTargetGroupsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionForwardTargetGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionForwardTargetGroupsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionForwardTargetGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionForwardTargetGroupsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionForwardTargetGroupsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionForwardTargetGroupsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionForwardTargetGroupsOutputReference.property.targetGroupIdentifier">target_group_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionForwardTargetGroupsOutputReference.property.weight">weight</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionForwardTargetGroupsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionForwardTargetGroups">DataAwsccVpclatticeRuleActionForwardTargetGroups</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionForwardTargetGroupsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionForwardTargetGroupsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `target_group_identifier`<sup>Required</sup> <a name="target_group_identifier" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionForwardTargetGroupsOutputReference.property.targetGroupIdentifier"></a>

```python
target_group_identifier: str
```

- *Type:* str

---

##### `weight`<sup>Required</sup> <a name="weight" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionForwardTargetGroupsOutputReference.property.weight"></a>

```python
weight: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionForwardTargetGroupsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccVpclatticeRuleActionForwardTargetGroups
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionForwardTargetGroups">DataAwsccVpclatticeRuleActionForwardTargetGroups</a>

---


### DataAwsccVpclatticeRuleActionOutputReference <a name="DataAwsccVpclatticeRuleActionOutputReference" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_vpclattice_rule

dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionOutputReference.property.fixedResponse">fixed_response</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionFixedResponseOutputReference">DataAwsccVpclatticeRuleActionFixedResponseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionOutputReference.property.forward">forward</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionForwardOutputReference">DataAwsccVpclatticeRuleActionForwardOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleAction">DataAwsccVpclatticeRuleAction</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `fixed_response`<sup>Required</sup> <a name="fixed_response" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionOutputReference.property.fixedResponse"></a>

```python
fixed_response: DataAwsccVpclatticeRuleActionFixedResponseOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionFixedResponseOutputReference">DataAwsccVpclatticeRuleActionFixedResponseOutputReference</a>

---

##### `forward`<sup>Required</sup> <a name="forward" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionOutputReference.property.forward"></a>

```python
forward: DataAwsccVpclatticeRuleActionForwardOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionForwardOutputReference">DataAwsccVpclatticeRuleActionForwardOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleActionOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccVpclatticeRuleAction
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleAction">DataAwsccVpclatticeRuleAction</a>

---


### DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesList <a name="DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesList" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_vpclattice_rule

dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesMatchOutputReference <a name="DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesMatchOutputReference" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesMatchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesMatchOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_vpclattice_rule

dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesMatchOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesMatchOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesMatchOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesMatchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesMatchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesMatchOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesMatchOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesMatchOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesMatchOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesMatchOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesMatchOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesMatchOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesMatchOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesMatchOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesMatchOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesMatchOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesMatchOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesMatchOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesMatchOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesMatchOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesMatchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesMatchOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesMatchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesMatchOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesMatchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesMatchOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesMatchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesMatchOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesMatchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesMatchOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesMatchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesMatchOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesMatchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesMatchOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesMatchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesMatchOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesMatchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesMatchOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesMatchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesMatchOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesMatchOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesMatchOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesMatchOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesMatchOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesMatchOutputReference.property.contains">contains</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesMatchOutputReference.property.exact">exact</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesMatchOutputReference.property.prefix">prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesMatchOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesMatch">DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesMatch</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesMatchOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesMatchOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `contains`<sup>Required</sup> <a name="contains" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesMatchOutputReference.property.contains"></a>

```python
contains: str
```

- *Type:* str

---

##### `exact`<sup>Required</sup> <a name="exact" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesMatchOutputReference.property.exact"></a>

```python
exact: str
```

- *Type:* str

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesMatchOutputReference.property.prefix"></a>

```python
prefix: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesMatchOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesMatch
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesMatch">DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesMatch</a>

---


### DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesOutputReference <a name="DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesOutputReference" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_vpclattice_rule

dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesOutputReference.property.caseSensitive">case_sensitive</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesOutputReference.property.match">match</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesMatchOutputReference">DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesMatchOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatches">DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatches</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `case_sensitive`<sup>Required</sup> <a name="case_sensitive" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesOutputReference.property.caseSensitive"></a>

```python
case_sensitive: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `match`<sup>Required</sup> <a name="match" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesOutputReference.property.match"></a>

```python
match: DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesMatchOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesMatchOutputReference">DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesMatchOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatches
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatches">DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatches</a>

---


### DataAwsccVpclatticeRuleMatchHttpMatchOutputReference <a name="DataAwsccVpclatticeRuleMatchHttpMatchOutputReference" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_vpclattice_rule

dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchOutputReference.property.headerMatches">header_matches</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesList">DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchOutputReference.property.method">method</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchOutputReference.property.pathMatch">path_match</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchPathMatchOutputReference">DataAwsccVpclatticeRuleMatchHttpMatchPathMatchOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatch">DataAwsccVpclatticeRuleMatchHttpMatch</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `header_matches`<sup>Required</sup> <a name="header_matches" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchOutputReference.property.headerMatches"></a>

```python
header_matches: DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesList">DataAwsccVpclatticeRuleMatchHttpMatchHeaderMatchesList</a>

---

##### `method`<sup>Required</sup> <a name="method" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchOutputReference.property.method"></a>

```python
method: str
```

- *Type:* str

---

##### `path_match`<sup>Required</sup> <a name="path_match" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchOutputReference.property.pathMatch"></a>

```python
path_match: DataAwsccVpclatticeRuleMatchHttpMatchPathMatchOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchPathMatchOutputReference">DataAwsccVpclatticeRuleMatchHttpMatchPathMatchOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccVpclatticeRuleMatchHttpMatch
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatch">DataAwsccVpclatticeRuleMatchHttpMatch</a>

---


### DataAwsccVpclatticeRuleMatchHttpMatchPathMatchMatchOutputReference <a name="DataAwsccVpclatticeRuleMatchHttpMatchPathMatchMatchOutputReference" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchPathMatchMatchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchPathMatchMatchOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_vpclattice_rule

dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchPathMatchMatchOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchPathMatchMatchOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchPathMatchMatchOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchPathMatchMatchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchPathMatchMatchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchPathMatchMatchOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchPathMatchMatchOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchPathMatchMatchOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchPathMatchMatchOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchPathMatchMatchOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchPathMatchMatchOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchPathMatchMatchOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchPathMatchMatchOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchPathMatchMatchOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchPathMatchMatchOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchPathMatchMatchOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchPathMatchMatchOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchPathMatchMatchOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchPathMatchMatchOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchPathMatchMatchOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchPathMatchMatchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchPathMatchMatchOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchPathMatchMatchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchPathMatchMatchOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchPathMatchMatchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchPathMatchMatchOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchPathMatchMatchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchPathMatchMatchOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchPathMatchMatchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchPathMatchMatchOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchPathMatchMatchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchPathMatchMatchOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchPathMatchMatchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchPathMatchMatchOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchPathMatchMatchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchPathMatchMatchOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchPathMatchMatchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchPathMatchMatchOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchPathMatchMatchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchPathMatchMatchOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchPathMatchMatchOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchPathMatchMatchOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchPathMatchMatchOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchPathMatchMatchOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchPathMatchMatchOutputReference.property.exact">exact</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchPathMatchMatchOutputReference.property.prefix">prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchPathMatchMatchOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchPathMatchMatch">DataAwsccVpclatticeRuleMatchHttpMatchPathMatchMatch</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchPathMatchMatchOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchPathMatchMatchOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `exact`<sup>Required</sup> <a name="exact" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchPathMatchMatchOutputReference.property.exact"></a>

```python
exact: str
```

- *Type:* str

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchPathMatchMatchOutputReference.property.prefix"></a>

```python
prefix: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchPathMatchMatchOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccVpclatticeRuleMatchHttpMatchPathMatchMatch
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchPathMatchMatch">DataAwsccVpclatticeRuleMatchHttpMatchPathMatchMatch</a>

---


### DataAwsccVpclatticeRuleMatchHttpMatchPathMatchOutputReference <a name="DataAwsccVpclatticeRuleMatchHttpMatchPathMatchOutputReference" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchPathMatchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchPathMatchOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_vpclattice_rule

dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchPathMatchOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchPathMatchOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchPathMatchOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchPathMatchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchPathMatchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchPathMatchOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchPathMatchOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchPathMatchOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchPathMatchOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchPathMatchOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchPathMatchOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchPathMatchOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchPathMatchOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchPathMatchOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchPathMatchOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchPathMatchOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchPathMatchOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchPathMatchOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchPathMatchOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchPathMatchOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchPathMatchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchPathMatchOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchPathMatchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchPathMatchOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchPathMatchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchPathMatchOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchPathMatchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchPathMatchOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchPathMatchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchPathMatchOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchPathMatchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchPathMatchOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchPathMatchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchPathMatchOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchPathMatchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchPathMatchOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchPathMatchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchPathMatchOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchPathMatchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchPathMatchOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchPathMatchOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchPathMatchOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchPathMatchOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchPathMatchOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchPathMatchOutputReference.property.caseSensitive">case_sensitive</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchPathMatchOutputReference.property.match">match</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchPathMatchMatchOutputReference">DataAwsccVpclatticeRuleMatchHttpMatchPathMatchMatchOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchPathMatchOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchPathMatch">DataAwsccVpclatticeRuleMatchHttpMatchPathMatch</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchPathMatchOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchPathMatchOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `case_sensitive`<sup>Required</sup> <a name="case_sensitive" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchPathMatchOutputReference.property.caseSensitive"></a>

```python
case_sensitive: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `match`<sup>Required</sup> <a name="match" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchPathMatchOutputReference.property.match"></a>

```python
match: DataAwsccVpclatticeRuleMatchHttpMatchPathMatchMatchOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchPathMatchMatchOutputReference">DataAwsccVpclatticeRuleMatchHttpMatchPathMatchMatchOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchPathMatchOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccVpclatticeRuleMatchHttpMatchPathMatch
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchPathMatch">DataAwsccVpclatticeRuleMatchHttpMatchPathMatch</a>

---


### DataAwsccVpclatticeRuleMatchOutputReference <a name="DataAwsccVpclatticeRuleMatchOutputReference" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_vpclattice_rule

dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchOutputReference.property.httpMatch">http_match</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchOutputReference">DataAwsccVpclatticeRuleMatchHttpMatchOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatch">DataAwsccVpclatticeRuleMatch</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `http_match`<sup>Required</sup> <a name="http_match" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchOutputReference.property.httpMatch"></a>

```python
http_match: DataAwsccVpclatticeRuleMatchHttpMatchOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchHttpMatchOutputReference">DataAwsccVpclatticeRuleMatchHttpMatchOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatchOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccVpclatticeRuleMatch
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleMatch">DataAwsccVpclatticeRuleMatch</a>

---


### DataAwsccVpclatticeRuleTagsList <a name="DataAwsccVpclatticeRuleTagsList" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_vpclattice_rule

dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccVpclatticeRuleTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccVpclatticeRuleTagsOutputReference <a name="DataAwsccVpclatticeRuleTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_vpclattice_rule

dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleTags">DataAwsccVpclatticeRuleTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccVpclatticeRuleTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccVpclatticeRule.DataAwsccVpclatticeRuleTags">DataAwsccVpclatticeRuleTags</a>

---



