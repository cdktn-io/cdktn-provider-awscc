# `dataAwsccB2BiTransformer` Submodule <a name="`dataAwsccB2BiTransformer` Submodule" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccB2BiTransformer <a name="DataAwsccB2BiTransformer" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformer"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/b2bi_transformer awscc_b2bi_transformer}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformer.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_b2_bi_transformer

dataAwsccB2BiTransformer.DataAwsccB2BiTransformer(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformer.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformer.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformer.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformer.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformer.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformer.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformer.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformer.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformer.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformer.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformer.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformer.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformer.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformer.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformer.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformer.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformer.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformer.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformer.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformer.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/b2bi_transformer#id DataAwsccB2BiTransformer#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformer.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformer.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformer.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformer.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformer.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformer.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformer.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformer.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformer.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformer.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformer.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformer.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformer.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformer.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformer.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformer.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformer.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformer.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformer.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformer.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformer.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformer.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformer.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformer.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformer.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformer.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformer.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformer.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformer.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformer.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformer.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformer.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformer.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformer.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformer.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformer.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformer.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformer.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformer.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformer.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformer.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformer.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformer.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccB2BiTransformer resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformer.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_b2_bi_transformer

dataAwsccB2BiTransformer.DataAwsccB2BiTransformer.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformer.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformer.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_b2_bi_transformer

dataAwsccB2BiTransformer.DataAwsccB2BiTransformer.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformer.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformer.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_b2_bi_transformer

dataAwsccB2BiTransformer.DataAwsccB2BiTransformer.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformer.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformer.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_b2_bi_transformer

dataAwsccB2BiTransformer.DataAwsccB2BiTransformer.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccB2BiTransformer resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformer.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformer.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccB2BiTransformer to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformer.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccB2BiTransformer that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/b2bi_transformer#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformer.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccB2BiTransformer to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformer.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformer.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformer.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformer.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformer.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformer.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformer.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformer.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformer.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformer.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformer.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformer.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformer.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformer.property.ediType">edi_type</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerEdiTypeOutputReference">DataAwsccB2BiTransformerEdiTypeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformer.property.fileFormat">file_format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformer.property.inputConversion">input_conversion</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionOutputReference">DataAwsccB2BiTransformerInputConversionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformer.property.mapping">mapping</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerMappingOutputReference">DataAwsccB2BiTransformerMappingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformer.property.mappingTemplate">mapping_template</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformer.property.modifiedAt">modified_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformer.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformer.property.outputConversion">output_conversion</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionOutputReference">DataAwsccB2BiTransformerOutputConversionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformer.property.sampleDocument">sample_document</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformer.property.sampleDocuments">sample_documents</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerSampleDocumentsOutputReference">DataAwsccB2BiTransformerSampleDocumentsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformer.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformer.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerTagsList">DataAwsccB2BiTransformerTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformer.property.transformerArn">transformer_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformer.property.transformerId">transformer_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformer.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformer.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformer.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformer.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformer.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformer.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformer.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformer.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformer.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformer.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformer.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformer.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformer.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformer.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformer.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `edi_type`<sup>Required</sup> <a name="edi_type" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformer.property.ediType"></a>

```python
edi_type: DataAwsccB2BiTransformerEdiTypeOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerEdiTypeOutputReference">DataAwsccB2BiTransformerEdiTypeOutputReference</a>

---

##### `file_format`<sup>Required</sup> <a name="file_format" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformer.property.fileFormat"></a>

```python
file_format: str
```

- *Type:* str

---

##### `input_conversion`<sup>Required</sup> <a name="input_conversion" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformer.property.inputConversion"></a>

```python
input_conversion: DataAwsccB2BiTransformerInputConversionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionOutputReference">DataAwsccB2BiTransformerInputConversionOutputReference</a>

---

##### `mapping`<sup>Required</sup> <a name="mapping" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformer.property.mapping"></a>

```python
mapping: DataAwsccB2BiTransformerMappingOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerMappingOutputReference">DataAwsccB2BiTransformerMappingOutputReference</a>

---

##### `mapping_template`<sup>Required</sup> <a name="mapping_template" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformer.property.mappingTemplate"></a>

```python
mapping_template: str
```

- *Type:* str

---

##### `modified_at`<sup>Required</sup> <a name="modified_at" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformer.property.modifiedAt"></a>

```python
modified_at: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformer.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `output_conversion`<sup>Required</sup> <a name="output_conversion" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformer.property.outputConversion"></a>

```python
output_conversion: DataAwsccB2BiTransformerOutputConversionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionOutputReference">DataAwsccB2BiTransformerOutputConversionOutputReference</a>

---

##### `sample_document`<sup>Required</sup> <a name="sample_document" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformer.property.sampleDocument"></a>

```python
sample_document: str
```

- *Type:* str

---

##### `sample_documents`<sup>Required</sup> <a name="sample_documents" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformer.property.sampleDocuments"></a>

```python
sample_documents: DataAwsccB2BiTransformerSampleDocumentsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerSampleDocumentsOutputReference">DataAwsccB2BiTransformerSampleDocumentsOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformer.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformer.property.tags"></a>

```python
tags: DataAwsccB2BiTransformerTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerTagsList">DataAwsccB2BiTransformerTagsList</a>

---

##### `transformer_arn`<sup>Required</sup> <a name="transformer_arn" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformer.property.transformerArn"></a>

```python
transformer_arn: str
```

- *Type:* str

---

##### `transformer_id`<sup>Required</sup> <a name="transformer_id" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformer.property.transformerId"></a>

```python
transformer_id: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformer.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformer.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformer.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformer.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccB2BiTransformerConfig <a name="DataAwsccB2BiTransformerConfig" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_b2_bi_transformer

dataAwsccB2BiTransformer.DataAwsccB2BiTransformerConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/b2bi_transformer#id DataAwsccB2BiTransformer#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccB2BiTransformerEdiType <a name="DataAwsccB2BiTransformerEdiType" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerEdiType"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerEdiType.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_b2_bi_transformer

dataAwsccB2BiTransformer.DataAwsccB2BiTransformerEdiType()
```


### DataAwsccB2BiTransformerEdiTypeX12Details <a name="DataAwsccB2BiTransformerEdiTypeX12Details" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerEdiTypeX12Details"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerEdiTypeX12Details.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_b2_bi_transformer

dataAwsccB2BiTransformer.DataAwsccB2BiTransformerEdiTypeX12Details()
```


### DataAwsccB2BiTransformerInputConversion <a name="DataAwsccB2BiTransformerInputConversion" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversion"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversion.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_b2_bi_transformer

dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversion()
```


### DataAwsccB2BiTransformerInputConversionAdvancedOptions <a name="DataAwsccB2BiTransformerInputConversionAdvancedOptions" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptions.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_b2_bi_transformer

dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptions()
```


### DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12 <a name="DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_b2_bi_transformer

dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12()
```


### DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12SplitOptions <a name="DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12SplitOptions" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12SplitOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12SplitOptions.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_b2_bi_transformer

dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12SplitOptions()
```


### DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptions <a name="DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptions" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptions.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_b2_bi_transformer

dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptions()
```


### DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRules <a name="DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRules" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRules.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_b2_bi_transformer

dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRules()
```


### DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRule <a name="DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRule" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRule.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_b2_bi_transformer

dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRule()
```


### DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRule <a name="DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRule" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRule.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_b2_bi_transformer

dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRule()
```


### DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRule <a name="DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRule" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRule.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_b2_bi_transformer

dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRule()
```


### DataAwsccB2BiTransformerInputConversionFormatOptions <a name="DataAwsccB2BiTransformerInputConversionFormatOptions" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionFormatOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionFormatOptions.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_b2_bi_transformer

dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionFormatOptions()
```


### DataAwsccB2BiTransformerInputConversionFormatOptionsX12 <a name="DataAwsccB2BiTransformerInputConversionFormatOptionsX12" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionFormatOptionsX12"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionFormatOptionsX12.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_b2_bi_transformer

dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionFormatOptionsX12()
```


### DataAwsccB2BiTransformerMapping <a name="DataAwsccB2BiTransformerMapping" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerMapping"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerMapping.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_b2_bi_transformer

dataAwsccB2BiTransformer.DataAwsccB2BiTransformerMapping()
```


### DataAwsccB2BiTransformerOutputConversion <a name="DataAwsccB2BiTransformerOutputConversion" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversion"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversion.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_b2_bi_transformer

dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversion()
```


### DataAwsccB2BiTransformerOutputConversionAdvancedOptions <a name="DataAwsccB2BiTransformerOutputConversionAdvancedOptions" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptions.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_b2_bi_transformer

dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptions()
```


### DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12 <a name="DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_b2_bi_transformer

dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12()
```


### DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12SplitOptions <a name="DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12SplitOptions" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12SplitOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12SplitOptions.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_b2_bi_transformer

dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12SplitOptions()
```


### DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptions <a name="DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptions" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptions.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_b2_bi_transformer

dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptions()
```


### DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRules <a name="DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRules" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRules.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_b2_bi_transformer

dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRules()
```


### DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRule <a name="DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRule" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRule.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_b2_bi_transformer

dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRule()
```


### DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRule <a name="DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRule" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRule.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_b2_bi_transformer

dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRule()
```


### DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRule <a name="DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRule" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRule.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_b2_bi_transformer

dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRule()
```


### DataAwsccB2BiTransformerOutputConversionFormatOptions <a name="DataAwsccB2BiTransformerOutputConversionFormatOptions" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionFormatOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionFormatOptions.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_b2_bi_transformer

dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionFormatOptions()
```


### DataAwsccB2BiTransformerOutputConversionFormatOptionsX12 <a name="DataAwsccB2BiTransformerOutputConversionFormatOptionsX12" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionFormatOptionsX12"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionFormatOptionsX12.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_b2_bi_transformer

dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionFormatOptionsX12()
```


### DataAwsccB2BiTransformerSampleDocuments <a name="DataAwsccB2BiTransformerSampleDocuments" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerSampleDocuments"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerSampleDocuments.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_b2_bi_transformer

dataAwsccB2BiTransformer.DataAwsccB2BiTransformerSampleDocuments()
```


### DataAwsccB2BiTransformerSampleDocumentsKeys <a name="DataAwsccB2BiTransformerSampleDocumentsKeys" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerSampleDocumentsKeys"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerSampleDocumentsKeys.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_b2_bi_transformer

dataAwsccB2BiTransformer.DataAwsccB2BiTransformerSampleDocumentsKeys()
```


### DataAwsccB2BiTransformerTags <a name="DataAwsccB2BiTransformerTags" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerTags.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_b2_bi_transformer

dataAwsccB2BiTransformer.DataAwsccB2BiTransformerTags()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccB2BiTransformerEdiTypeOutputReference <a name="DataAwsccB2BiTransformerEdiTypeOutputReference" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerEdiTypeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerEdiTypeOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_b2_bi_transformer

dataAwsccB2BiTransformer.DataAwsccB2BiTransformerEdiTypeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerEdiTypeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerEdiTypeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerEdiTypeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerEdiTypeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerEdiTypeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerEdiTypeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerEdiTypeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerEdiTypeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerEdiTypeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerEdiTypeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerEdiTypeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerEdiTypeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerEdiTypeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerEdiTypeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerEdiTypeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerEdiTypeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerEdiTypeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerEdiTypeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerEdiTypeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerEdiTypeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerEdiTypeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerEdiTypeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerEdiTypeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerEdiTypeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerEdiTypeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerEdiTypeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerEdiTypeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerEdiTypeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerEdiTypeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerEdiTypeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerEdiTypeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerEdiTypeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerEdiTypeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerEdiTypeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerEdiTypeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerEdiTypeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerEdiTypeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerEdiTypeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerEdiTypeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerEdiTypeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerEdiTypeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerEdiTypeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerEdiTypeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerEdiTypeOutputReference.property.x12Details">x12_details</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerEdiTypeX12DetailsOutputReference">DataAwsccB2BiTransformerEdiTypeX12DetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerEdiTypeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerEdiType">DataAwsccB2BiTransformerEdiType</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerEdiTypeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerEdiTypeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `x12_details`<sup>Required</sup> <a name="x12_details" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerEdiTypeOutputReference.property.x12Details"></a>

```python
x12_details: DataAwsccB2BiTransformerEdiTypeX12DetailsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerEdiTypeX12DetailsOutputReference">DataAwsccB2BiTransformerEdiTypeX12DetailsOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerEdiTypeOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccB2BiTransformerEdiType
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerEdiType">DataAwsccB2BiTransformerEdiType</a>

---


### DataAwsccB2BiTransformerEdiTypeX12DetailsOutputReference <a name="DataAwsccB2BiTransformerEdiTypeX12DetailsOutputReference" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerEdiTypeX12DetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerEdiTypeX12DetailsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_b2_bi_transformer

dataAwsccB2BiTransformer.DataAwsccB2BiTransformerEdiTypeX12DetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerEdiTypeX12DetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerEdiTypeX12DetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerEdiTypeX12DetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerEdiTypeX12DetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerEdiTypeX12DetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerEdiTypeX12DetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerEdiTypeX12DetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerEdiTypeX12DetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerEdiTypeX12DetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerEdiTypeX12DetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerEdiTypeX12DetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerEdiTypeX12DetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerEdiTypeX12DetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerEdiTypeX12DetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerEdiTypeX12DetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerEdiTypeX12DetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerEdiTypeX12DetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerEdiTypeX12DetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerEdiTypeX12DetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerEdiTypeX12DetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerEdiTypeX12DetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerEdiTypeX12DetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerEdiTypeX12DetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerEdiTypeX12DetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerEdiTypeX12DetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerEdiTypeX12DetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerEdiTypeX12DetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerEdiTypeX12DetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerEdiTypeX12DetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerEdiTypeX12DetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerEdiTypeX12DetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerEdiTypeX12DetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerEdiTypeX12DetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerEdiTypeX12DetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerEdiTypeX12DetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerEdiTypeX12DetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerEdiTypeX12DetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerEdiTypeX12DetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerEdiTypeX12DetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerEdiTypeX12DetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerEdiTypeX12DetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerEdiTypeX12DetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerEdiTypeX12DetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerEdiTypeX12DetailsOutputReference.property.transactionSet">transaction_set</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerEdiTypeX12DetailsOutputReference.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerEdiTypeX12DetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerEdiTypeX12Details">DataAwsccB2BiTransformerEdiTypeX12Details</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerEdiTypeX12DetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerEdiTypeX12DetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `transaction_set`<sup>Required</sup> <a name="transaction_set" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerEdiTypeX12DetailsOutputReference.property.transactionSet"></a>

```python
transaction_set: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerEdiTypeX12DetailsOutputReference.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerEdiTypeX12DetailsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccB2BiTransformerEdiTypeX12Details
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerEdiTypeX12Details">DataAwsccB2BiTransformerEdiTypeX12Details</a>

---


### DataAwsccB2BiTransformerInputConversionAdvancedOptionsOutputReference <a name="DataAwsccB2BiTransformerInputConversionAdvancedOptionsOutputReference" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_b2_bi_transformer

dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsOutputReference.property.x12">x12</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12OutputReference">DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptions">DataAwsccB2BiTransformerInputConversionAdvancedOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `x12`<sup>Required</sup> <a name="x12" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsOutputReference.property.x12"></a>

```python
x12: DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12OutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12OutputReference">DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12OutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccB2BiTransformerInputConversionAdvancedOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptions">DataAwsccB2BiTransformerInputConversionAdvancedOptions</a>

---


### DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12OutputReference <a name="DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12OutputReference" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12OutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_b2_bi_transformer

dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12OutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12OutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12OutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12OutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12OutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12OutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12OutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12OutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12OutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12OutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12OutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12OutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12OutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12OutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12OutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12OutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12OutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12OutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12OutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12OutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12OutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12OutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12OutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12OutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12OutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12OutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12OutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12OutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12OutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12OutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12OutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12OutputReference.property.splitOptions">split_options</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference">DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12OutputReference.property.validationOptions">validation_options</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference">DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12OutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12">DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12OutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12OutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `split_options`<sup>Required</sup> <a name="split_options" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12OutputReference.property.splitOptions"></a>

```python
split_options: DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference">DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference</a>

---

##### `validation_options`<sup>Required</sup> <a name="validation_options" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12OutputReference.property.validationOptions"></a>

```python
validation_options: DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference">DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12OutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12">DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12</a>

---


### DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference <a name="DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_b2_bi_transformer

dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference.property.splitBy">split_by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12SplitOptions">DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12SplitOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `split_by`<sup>Required</sup> <a name="split_by" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference.property.splitBy"></a>

```python
split_by: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12SplitOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12SplitOptions">DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12SplitOptions</a>

---


### DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference <a name="DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_b2_bi_transformer

dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.property.validationRules">validation_rules</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList">DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptions">DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `validation_rules`<sup>Required</sup> <a name="validation_rules" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.property.validationRules"></a>

```python
validation_rules: DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList">DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptions">DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptions</a>

---


### DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference <a name="DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_b2_bi_transformer

dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.property.codesToAdd">codes_to_add</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.property.codesToRemove">codes_to_remove</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.property.elementId">element_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRule">DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRule</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `codes_to_add`<sup>Required</sup> <a name="codes_to_add" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.property.codesToAdd"></a>

```python
codes_to_add: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `codes_to_remove`<sup>Required</sup> <a name="codes_to_remove" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.property.codesToRemove"></a>

```python
codes_to_remove: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `element_id`<sup>Required</sup> <a name="element_id" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.property.elementId"></a>

```python
element_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRule
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRule">DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRule</a>

---


### DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference <a name="DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_b2_bi_transformer

dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.property.elementId">element_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.property.maxLength">max_length</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.property.minLength">min_length</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRule">DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRule</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `element_id`<sup>Required</sup> <a name="element_id" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.property.elementId"></a>

```python
element_id: str
```

- *Type:* str

---

##### `max_length`<sup>Required</sup> <a name="max_length" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.property.maxLength"></a>

```python
max_length: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_length`<sup>Required</sup> <a name="min_length" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.property.minLength"></a>

```python
min_length: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRule
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRule">DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRule</a>

---


### DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference <a name="DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_b2_bi_transformer

dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.property.elementPosition">element_position</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.property.requirement">requirement</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRule">DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRule</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `element_position`<sup>Required</sup> <a name="element_position" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.property.elementPosition"></a>

```python
element_position: str
```

- *Type:* str

---

##### `requirement`<sup>Required</sup> <a name="requirement" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.property.requirement"></a>

```python
requirement: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRule
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRule">DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRule</a>

---


### DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList <a name="DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_b2_bi_transformer

dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference <a name="DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_b2_bi_transformer

dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.property.codeListValidationRule">code_list_validation_rule</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference">DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.property.elementLengthValidationRule">element_length_validation_rule</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference">DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.property.elementRequirementValidationRule">element_requirement_validation_rule</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference">DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRules">DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRules</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `code_list_validation_rule`<sup>Required</sup> <a name="code_list_validation_rule" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.property.codeListValidationRule"></a>

```python
code_list_validation_rule: DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference">DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference</a>

---

##### `element_length_validation_rule`<sup>Required</sup> <a name="element_length_validation_rule" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.property.elementLengthValidationRule"></a>

```python
element_length_validation_rule: DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference">DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference</a>

---

##### `element_requirement_validation_rule`<sup>Required</sup> <a name="element_requirement_validation_rule" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.property.elementRequirementValidationRule"></a>

```python
element_requirement_validation_rule: DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference">DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRules
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRules">DataAwsccB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRules</a>

---


### DataAwsccB2BiTransformerInputConversionFormatOptionsOutputReference <a name="DataAwsccB2BiTransformerInputConversionFormatOptionsOutputReference" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionFormatOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionFormatOptionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_b2_bi_transformer

dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionFormatOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionFormatOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionFormatOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionFormatOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionFormatOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionFormatOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionFormatOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionFormatOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionFormatOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionFormatOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionFormatOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionFormatOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionFormatOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionFormatOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionFormatOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionFormatOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionFormatOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionFormatOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionFormatOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionFormatOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionFormatOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionFormatOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionFormatOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionFormatOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionFormatOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionFormatOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionFormatOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionFormatOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionFormatOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionFormatOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionFormatOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionFormatOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionFormatOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionFormatOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionFormatOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionFormatOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionFormatOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionFormatOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionFormatOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionFormatOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionFormatOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionFormatOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionFormatOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionFormatOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionFormatOptionsOutputReference.property.x12">x12</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionFormatOptionsX12OutputReference">DataAwsccB2BiTransformerInputConversionFormatOptionsX12OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionFormatOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionFormatOptions">DataAwsccB2BiTransformerInputConversionFormatOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionFormatOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionFormatOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `x12`<sup>Required</sup> <a name="x12" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionFormatOptionsOutputReference.property.x12"></a>

```python
x12: DataAwsccB2BiTransformerInputConversionFormatOptionsX12OutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionFormatOptionsX12OutputReference">DataAwsccB2BiTransformerInputConversionFormatOptionsX12OutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionFormatOptionsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccB2BiTransformerInputConversionFormatOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionFormatOptions">DataAwsccB2BiTransformerInputConversionFormatOptions</a>

---


### DataAwsccB2BiTransformerInputConversionFormatOptionsX12OutputReference <a name="DataAwsccB2BiTransformerInputConversionFormatOptionsX12OutputReference" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionFormatOptionsX12OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionFormatOptionsX12OutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_b2_bi_transformer

dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionFormatOptionsX12OutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionFormatOptionsX12OutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionFormatOptionsX12OutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionFormatOptionsX12OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionFormatOptionsX12OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionFormatOptionsX12OutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionFormatOptionsX12OutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionFormatOptionsX12OutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionFormatOptionsX12OutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionFormatOptionsX12OutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionFormatOptionsX12OutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionFormatOptionsX12OutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionFormatOptionsX12OutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionFormatOptionsX12OutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionFormatOptionsX12OutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionFormatOptionsX12OutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionFormatOptionsX12OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionFormatOptionsX12OutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionFormatOptionsX12OutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionFormatOptionsX12OutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionFormatOptionsX12OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionFormatOptionsX12OutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionFormatOptionsX12OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionFormatOptionsX12OutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionFormatOptionsX12OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionFormatOptionsX12OutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionFormatOptionsX12OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionFormatOptionsX12OutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionFormatOptionsX12OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionFormatOptionsX12OutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionFormatOptionsX12OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionFormatOptionsX12OutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionFormatOptionsX12OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionFormatOptionsX12OutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionFormatOptionsX12OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionFormatOptionsX12OutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionFormatOptionsX12OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionFormatOptionsX12OutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionFormatOptionsX12OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionFormatOptionsX12OutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionFormatOptionsX12OutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionFormatOptionsX12OutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionFormatOptionsX12OutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionFormatOptionsX12OutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionFormatOptionsX12OutputReference.property.transactionSet">transaction_set</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionFormatOptionsX12OutputReference.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionFormatOptionsX12OutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionFormatOptionsX12">DataAwsccB2BiTransformerInputConversionFormatOptionsX12</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionFormatOptionsX12OutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionFormatOptionsX12OutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `transaction_set`<sup>Required</sup> <a name="transaction_set" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionFormatOptionsX12OutputReference.property.transactionSet"></a>

```python
transaction_set: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionFormatOptionsX12OutputReference.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionFormatOptionsX12OutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccB2BiTransformerInputConversionFormatOptionsX12
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionFormatOptionsX12">DataAwsccB2BiTransformerInputConversionFormatOptionsX12</a>

---


### DataAwsccB2BiTransformerInputConversionOutputReference <a name="DataAwsccB2BiTransformerInputConversionOutputReference" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_b2_bi_transformer

dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionOutputReference.property.advancedOptions">advanced_options</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsOutputReference">DataAwsccB2BiTransformerInputConversionAdvancedOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionOutputReference.property.formatOptions">format_options</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionFormatOptionsOutputReference">DataAwsccB2BiTransformerInputConversionFormatOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionOutputReference.property.fromFormat">from_format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversion">DataAwsccB2BiTransformerInputConversion</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `advanced_options`<sup>Required</sup> <a name="advanced_options" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionOutputReference.property.advancedOptions"></a>

```python
advanced_options: DataAwsccB2BiTransformerInputConversionAdvancedOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionAdvancedOptionsOutputReference">DataAwsccB2BiTransformerInputConversionAdvancedOptionsOutputReference</a>

---

##### `format_options`<sup>Required</sup> <a name="format_options" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionOutputReference.property.formatOptions"></a>

```python
format_options: DataAwsccB2BiTransformerInputConversionFormatOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionFormatOptionsOutputReference">DataAwsccB2BiTransformerInputConversionFormatOptionsOutputReference</a>

---

##### `from_format`<sup>Required</sup> <a name="from_format" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionOutputReference.property.fromFormat"></a>

```python
from_format: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversionOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccB2BiTransformerInputConversion
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerInputConversion">DataAwsccB2BiTransformerInputConversion</a>

---


### DataAwsccB2BiTransformerMappingOutputReference <a name="DataAwsccB2BiTransformerMappingOutputReference" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerMappingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerMappingOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_b2_bi_transformer

dataAwsccB2BiTransformer.DataAwsccB2BiTransformerMappingOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerMappingOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerMappingOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerMappingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerMappingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerMappingOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerMappingOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerMappingOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerMappingOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerMappingOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerMappingOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerMappingOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerMappingOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerMappingOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerMappingOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerMappingOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerMappingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerMappingOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerMappingOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerMappingOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerMappingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerMappingOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerMappingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerMappingOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerMappingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerMappingOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerMappingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerMappingOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerMappingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerMappingOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerMappingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerMappingOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerMappingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerMappingOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerMappingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerMappingOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerMappingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerMappingOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerMappingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerMappingOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerMappingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerMappingOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerMappingOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerMappingOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerMappingOutputReference.property.template">template</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerMappingOutputReference.property.templateLanguage">template_language</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerMappingOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerMapping">DataAwsccB2BiTransformerMapping</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerMappingOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerMappingOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `template`<sup>Required</sup> <a name="template" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerMappingOutputReference.property.template"></a>

```python
template: str
```

- *Type:* str

---

##### `template_language`<sup>Required</sup> <a name="template_language" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerMappingOutputReference.property.templateLanguage"></a>

```python
template_language: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerMappingOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccB2BiTransformerMapping
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerMapping">DataAwsccB2BiTransformerMapping</a>

---


### DataAwsccB2BiTransformerOutputConversionAdvancedOptionsOutputReference <a name="DataAwsccB2BiTransformerOutputConversionAdvancedOptionsOutputReference" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_b2_bi_transformer

dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsOutputReference.property.x12">x12</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12OutputReference">DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptions">DataAwsccB2BiTransformerOutputConversionAdvancedOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `x12`<sup>Required</sup> <a name="x12" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsOutputReference.property.x12"></a>

```python
x12: DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12OutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12OutputReference">DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12OutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccB2BiTransformerOutputConversionAdvancedOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptions">DataAwsccB2BiTransformerOutputConversionAdvancedOptions</a>

---


### DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12OutputReference <a name="DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12OutputReference" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_b2_bi_transformer

dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12OutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.property.splitOptions">split_options</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference">DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.property.validationOptions">validation_options</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference">DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12">DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `split_options`<sup>Required</sup> <a name="split_options" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.property.splitOptions"></a>

```python
split_options: DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference">DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference</a>

---

##### `validation_options`<sup>Required</sup> <a name="validation_options" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.property.validationOptions"></a>

```python
validation_options: DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference">DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12">DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12</a>

---


### DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference <a name="DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_b2_bi_transformer

dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference.property.splitBy">split_by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12SplitOptions">DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12SplitOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `split_by`<sup>Required</sup> <a name="split_by" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference.property.splitBy"></a>

```python
split_by: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12SplitOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12SplitOptions">DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12SplitOptions</a>

---


### DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference <a name="DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_b2_bi_transformer

dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.property.validationRules">validation_rules</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList">DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptions">DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `validation_rules`<sup>Required</sup> <a name="validation_rules" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.property.validationRules"></a>

```python
validation_rules: DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList">DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptions">DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptions</a>

---


### DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference <a name="DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_b2_bi_transformer

dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.property.codesToAdd">codes_to_add</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.property.codesToRemove">codes_to_remove</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.property.elementId">element_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRule">DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRule</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `codes_to_add`<sup>Required</sup> <a name="codes_to_add" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.property.codesToAdd"></a>

```python
codes_to_add: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `codes_to_remove`<sup>Required</sup> <a name="codes_to_remove" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.property.codesToRemove"></a>

```python
codes_to_remove: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `element_id`<sup>Required</sup> <a name="element_id" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.property.elementId"></a>

```python
element_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRule
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRule">DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRule</a>

---


### DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference <a name="DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_b2_bi_transformer

dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.property.elementId">element_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.property.maxLength">max_length</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.property.minLength">min_length</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRule">DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRule</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `element_id`<sup>Required</sup> <a name="element_id" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.property.elementId"></a>

```python
element_id: str
```

- *Type:* str

---

##### `max_length`<sup>Required</sup> <a name="max_length" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.property.maxLength"></a>

```python
max_length: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_length`<sup>Required</sup> <a name="min_length" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.property.minLength"></a>

```python
min_length: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRule
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRule">DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRule</a>

---


### DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference <a name="DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_b2_bi_transformer

dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.property.elementPosition">element_position</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.property.requirement">requirement</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRule">DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRule</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `element_position`<sup>Required</sup> <a name="element_position" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.property.elementPosition"></a>

```python
element_position: str
```

- *Type:* str

---

##### `requirement`<sup>Required</sup> <a name="requirement" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.property.requirement"></a>

```python
requirement: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRule
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRule">DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRule</a>

---


### DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList <a name="DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_b2_bi_transformer

dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference <a name="DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_b2_bi_transformer

dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.property.codeListValidationRule">code_list_validation_rule</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference">DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.property.elementLengthValidationRule">element_length_validation_rule</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference">DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.property.elementRequirementValidationRule">element_requirement_validation_rule</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference">DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRules">DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRules</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `code_list_validation_rule`<sup>Required</sup> <a name="code_list_validation_rule" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.property.codeListValidationRule"></a>

```python
code_list_validation_rule: DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference">DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference</a>

---

##### `element_length_validation_rule`<sup>Required</sup> <a name="element_length_validation_rule" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.property.elementLengthValidationRule"></a>

```python
element_length_validation_rule: DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference">DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference</a>

---

##### `element_requirement_validation_rule`<sup>Required</sup> <a name="element_requirement_validation_rule" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.property.elementRequirementValidationRule"></a>

```python
element_requirement_validation_rule: DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference">DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRules
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRules">DataAwsccB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRules</a>

---


### DataAwsccB2BiTransformerOutputConversionFormatOptionsOutputReference <a name="DataAwsccB2BiTransformerOutputConversionFormatOptionsOutputReference" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionFormatOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionFormatOptionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_b2_bi_transformer

dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionFormatOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionFormatOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionFormatOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionFormatOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionFormatOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionFormatOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionFormatOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionFormatOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionFormatOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionFormatOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionFormatOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionFormatOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionFormatOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionFormatOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionFormatOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionFormatOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionFormatOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionFormatOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionFormatOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionFormatOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionFormatOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionFormatOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionFormatOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionFormatOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionFormatOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionFormatOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionFormatOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionFormatOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionFormatOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionFormatOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionFormatOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionFormatOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionFormatOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionFormatOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionFormatOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionFormatOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionFormatOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionFormatOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionFormatOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionFormatOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionFormatOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionFormatOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionFormatOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionFormatOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionFormatOptionsOutputReference.property.x12">x12</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionFormatOptionsX12OutputReference">DataAwsccB2BiTransformerOutputConversionFormatOptionsX12OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionFormatOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionFormatOptions">DataAwsccB2BiTransformerOutputConversionFormatOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionFormatOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionFormatOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `x12`<sup>Required</sup> <a name="x12" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionFormatOptionsOutputReference.property.x12"></a>

```python
x12: DataAwsccB2BiTransformerOutputConversionFormatOptionsX12OutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionFormatOptionsX12OutputReference">DataAwsccB2BiTransformerOutputConversionFormatOptionsX12OutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionFormatOptionsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccB2BiTransformerOutputConversionFormatOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionFormatOptions">DataAwsccB2BiTransformerOutputConversionFormatOptions</a>

---


### DataAwsccB2BiTransformerOutputConversionFormatOptionsX12OutputReference <a name="DataAwsccB2BiTransformerOutputConversionFormatOptionsX12OutputReference" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionFormatOptionsX12OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionFormatOptionsX12OutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_b2_bi_transformer

dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionFormatOptionsX12OutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionFormatOptionsX12OutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionFormatOptionsX12OutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionFormatOptionsX12OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionFormatOptionsX12OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionFormatOptionsX12OutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionFormatOptionsX12OutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionFormatOptionsX12OutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionFormatOptionsX12OutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionFormatOptionsX12OutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionFormatOptionsX12OutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionFormatOptionsX12OutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionFormatOptionsX12OutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionFormatOptionsX12OutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionFormatOptionsX12OutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionFormatOptionsX12OutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionFormatOptionsX12OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionFormatOptionsX12OutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionFormatOptionsX12OutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionFormatOptionsX12OutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionFormatOptionsX12OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionFormatOptionsX12OutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionFormatOptionsX12OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionFormatOptionsX12OutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionFormatOptionsX12OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionFormatOptionsX12OutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionFormatOptionsX12OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionFormatOptionsX12OutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionFormatOptionsX12OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionFormatOptionsX12OutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionFormatOptionsX12OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionFormatOptionsX12OutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionFormatOptionsX12OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionFormatOptionsX12OutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionFormatOptionsX12OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionFormatOptionsX12OutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionFormatOptionsX12OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionFormatOptionsX12OutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionFormatOptionsX12OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionFormatOptionsX12OutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionFormatOptionsX12OutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionFormatOptionsX12OutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionFormatOptionsX12OutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionFormatOptionsX12OutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionFormatOptionsX12OutputReference.property.transactionSet">transaction_set</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionFormatOptionsX12OutputReference.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionFormatOptionsX12OutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionFormatOptionsX12">DataAwsccB2BiTransformerOutputConversionFormatOptionsX12</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionFormatOptionsX12OutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionFormatOptionsX12OutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `transaction_set`<sup>Required</sup> <a name="transaction_set" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionFormatOptionsX12OutputReference.property.transactionSet"></a>

```python
transaction_set: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionFormatOptionsX12OutputReference.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionFormatOptionsX12OutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccB2BiTransformerOutputConversionFormatOptionsX12
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionFormatOptionsX12">DataAwsccB2BiTransformerOutputConversionFormatOptionsX12</a>

---


### DataAwsccB2BiTransformerOutputConversionOutputReference <a name="DataAwsccB2BiTransformerOutputConversionOutputReference" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_b2_bi_transformer

dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionOutputReference.property.advancedOptions">advanced_options</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsOutputReference">DataAwsccB2BiTransformerOutputConversionAdvancedOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionOutputReference.property.formatOptions">format_options</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionFormatOptionsOutputReference">DataAwsccB2BiTransformerOutputConversionFormatOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionOutputReference.property.toFormat">to_format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversion">DataAwsccB2BiTransformerOutputConversion</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `advanced_options`<sup>Required</sup> <a name="advanced_options" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionOutputReference.property.advancedOptions"></a>

```python
advanced_options: DataAwsccB2BiTransformerOutputConversionAdvancedOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionAdvancedOptionsOutputReference">DataAwsccB2BiTransformerOutputConversionAdvancedOptionsOutputReference</a>

---

##### `format_options`<sup>Required</sup> <a name="format_options" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionOutputReference.property.formatOptions"></a>

```python
format_options: DataAwsccB2BiTransformerOutputConversionFormatOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionFormatOptionsOutputReference">DataAwsccB2BiTransformerOutputConversionFormatOptionsOutputReference</a>

---

##### `to_format`<sup>Required</sup> <a name="to_format" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionOutputReference.property.toFormat"></a>

```python
to_format: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversionOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccB2BiTransformerOutputConversion
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerOutputConversion">DataAwsccB2BiTransformerOutputConversion</a>

---


### DataAwsccB2BiTransformerSampleDocumentsKeysList <a name="DataAwsccB2BiTransformerSampleDocumentsKeysList" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerSampleDocumentsKeysList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerSampleDocumentsKeysList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_b2_bi_transformer

dataAwsccB2BiTransformer.DataAwsccB2BiTransformerSampleDocumentsKeysList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerSampleDocumentsKeysList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerSampleDocumentsKeysList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerSampleDocumentsKeysList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerSampleDocumentsKeysList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerSampleDocumentsKeysList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerSampleDocumentsKeysList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerSampleDocumentsKeysList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerSampleDocumentsKeysList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerSampleDocumentsKeysList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerSampleDocumentsKeysList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerSampleDocumentsKeysList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerSampleDocumentsKeysList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerSampleDocumentsKeysList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerSampleDocumentsKeysList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerSampleDocumentsKeysList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerSampleDocumentsKeysList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerSampleDocumentsKeysList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerSampleDocumentsKeysList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccB2BiTransformerSampleDocumentsKeysOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerSampleDocumentsKeysList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerSampleDocumentsKeysList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerSampleDocumentsKeysList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerSampleDocumentsKeysList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerSampleDocumentsKeysList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccB2BiTransformerSampleDocumentsKeysOutputReference <a name="DataAwsccB2BiTransformerSampleDocumentsKeysOutputReference" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerSampleDocumentsKeysOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerSampleDocumentsKeysOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_b2_bi_transformer

dataAwsccB2BiTransformer.DataAwsccB2BiTransformerSampleDocumentsKeysOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerSampleDocumentsKeysOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerSampleDocumentsKeysOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerSampleDocumentsKeysOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerSampleDocumentsKeysOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerSampleDocumentsKeysOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerSampleDocumentsKeysOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerSampleDocumentsKeysOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerSampleDocumentsKeysOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerSampleDocumentsKeysOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerSampleDocumentsKeysOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerSampleDocumentsKeysOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerSampleDocumentsKeysOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerSampleDocumentsKeysOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerSampleDocumentsKeysOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerSampleDocumentsKeysOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerSampleDocumentsKeysOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerSampleDocumentsKeysOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerSampleDocumentsKeysOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerSampleDocumentsKeysOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerSampleDocumentsKeysOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerSampleDocumentsKeysOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerSampleDocumentsKeysOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerSampleDocumentsKeysOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerSampleDocumentsKeysOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerSampleDocumentsKeysOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerSampleDocumentsKeysOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerSampleDocumentsKeysOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerSampleDocumentsKeysOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerSampleDocumentsKeysOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerSampleDocumentsKeysOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerSampleDocumentsKeysOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerSampleDocumentsKeysOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerSampleDocumentsKeysOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerSampleDocumentsKeysOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerSampleDocumentsKeysOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerSampleDocumentsKeysOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerSampleDocumentsKeysOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerSampleDocumentsKeysOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerSampleDocumentsKeysOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerSampleDocumentsKeysOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerSampleDocumentsKeysOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerSampleDocumentsKeysOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerSampleDocumentsKeysOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerSampleDocumentsKeysOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerSampleDocumentsKeysOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerSampleDocumentsKeysOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerSampleDocumentsKeysOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerSampleDocumentsKeysOutputReference.property.input">input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerSampleDocumentsKeysOutputReference.property.output">output</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerSampleDocumentsKeysOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerSampleDocumentsKeys">DataAwsccB2BiTransformerSampleDocumentsKeys</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerSampleDocumentsKeysOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerSampleDocumentsKeysOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `input`<sup>Required</sup> <a name="input" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerSampleDocumentsKeysOutputReference.property.input"></a>

```python
input: str
```

- *Type:* str

---

##### `output`<sup>Required</sup> <a name="output" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerSampleDocumentsKeysOutputReference.property.output"></a>

```python
output: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerSampleDocumentsKeysOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccB2BiTransformerSampleDocumentsKeys
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerSampleDocumentsKeys">DataAwsccB2BiTransformerSampleDocumentsKeys</a>

---


### DataAwsccB2BiTransformerSampleDocumentsOutputReference <a name="DataAwsccB2BiTransformerSampleDocumentsOutputReference" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerSampleDocumentsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerSampleDocumentsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_b2_bi_transformer

dataAwsccB2BiTransformer.DataAwsccB2BiTransformerSampleDocumentsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerSampleDocumentsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerSampleDocumentsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerSampleDocumentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerSampleDocumentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerSampleDocumentsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerSampleDocumentsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerSampleDocumentsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerSampleDocumentsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerSampleDocumentsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerSampleDocumentsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerSampleDocumentsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerSampleDocumentsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerSampleDocumentsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerSampleDocumentsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerSampleDocumentsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerSampleDocumentsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerSampleDocumentsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerSampleDocumentsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerSampleDocumentsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerSampleDocumentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerSampleDocumentsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerSampleDocumentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerSampleDocumentsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerSampleDocumentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerSampleDocumentsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerSampleDocumentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerSampleDocumentsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerSampleDocumentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerSampleDocumentsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerSampleDocumentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerSampleDocumentsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerSampleDocumentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerSampleDocumentsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerSampleDocumentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerSampleDocumentsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerSampleDocumentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerSampleDocumentsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerSampleDocumentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerSampleDocumentsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerSampleDocumentsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerSampleDocumentsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerSampleDocumentsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerSampleDocumentsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerSampleDocumentsOutputReference.property.bucketName">bucket_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerSampleDocumentsOutputReference.property.keys">keys</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerSampleDocumentsKeysList">DataAwsccB2BiTransformerSampleDocumentsKeysList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerSampleDocumentsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerSampleDocuments">DataAwsccB2BiTransformerSampleDocuments</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerSampleDocumentsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerSampleDocumentsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bucket_name`<sup>Required</sup> <a name="bucket_name" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerSampleDocumentsOutputReference.property.bucketName"></a>

```python
bucket_name: str
```

- *Type:* str

---

##### `keys`<sup>Required</sup> <a name="keys" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerSampleDocumentsOutputReference.property.keys"></a>

```python
keys: DataAwsccB2BiTransformerSampleDocumentsKeysList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerSampleDocumentsKeysList">DataAwsccB2BiTransformerSampleDocumentsKeysList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerSampleDocumentsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccB2BiTransformerSampleDocuments
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerSampleDocuments">DataAwsccB2BiTransformerSampleDocuments</a>

---


### DataAwsccB2BiTransformerTagsList <a name="DataAwsccB2BiTransformerTagsList" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_b2_bi_transformer

dataAwsccB2BiTransformer.DataAwsccB2BiTransformerTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccB2BiTransformerTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccB2BiTransformerTagsOutputReference <a name="DataAwsccB2BiTransformerTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_b2_bi_transformer

dataAwsccB2BiTransformer.DataAwsccB2BiTransformerTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerTags">DataAwsccB2BiTransformerTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccB2BiTransformerTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccB2BiTransformer.DataAwsccB2BiTransformerTags">DataAwsccB2BiTransformerTags</a>

---



