# `dataAwsccDevopsagentAssociation` Submodule <a name="`dataAwsccDevopsagentAssociation` Submodule" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccDevopsagentAssociation <a name="DataAwsccDevopsagentAssociation" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/devopsagent_association awscc_devopsagent_association}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_devopsagent_association

dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/devopsagent_association#id DataAwsccDevopsagentAssociation#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccDevopsagentAssociation resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_devopsagent_association

dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_devopsagent_association

dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_devopsagent_association

dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_devopsagent_association

dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccDevopsagentAssociation resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccDevopsagentAssociation to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccDevopsagentAssociation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/devopsagent_association#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccDevopsagentAssociation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.property.agentSpaceId">agent_space_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.property.associationId">association_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.property.configuration">configuration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationOutputReference">DataAwsccDevopsagentAssociationConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.property.linkedAssociationIds">linked_association_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.property.serviceId">service_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.property.updatedAt">updated_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `agent_space_id`<sup>Required</sup> <a name="agent_space_id" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.property.agentSpaceId"></a>

```python
agent_space_id: str
```

- *Type:* str

---

##### `association_id`<sup>Required</sup> <a name="association_id" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.property.associationId"></a>

```python
association_id: str
```

- *Type:* str

---

##### `configuration`<sup>Required</sup> <a name="configuration" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.property.configuration"></a>

```python
configuration: DataAwsccDevopsagentAssociationConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationOutputReference">DataAwsccDevopsagentAssociationConfigurationOutputReference</a>

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `linked_association_ids`<sup>Required</sup> <a name="linked_association_ids" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.property.linkedAssociationIds"></a>

```python
linked_association_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `service_id`<sup>Required</sup> <a name="service_id" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.property.serviceId"></a>

```python
service_id: str
```

- *Type:* str

---

##### `updated_at`<sup>Required</sup> <a name="updated_at" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.property.updatedAt"></a>

```python
updated_at: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociation.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccDevopsagentAssociationConfig <a name="DataAwsccDevopsagentAssociationConfig" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_devopsagent_association

dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/devopsagent_association#id DataAwsccDevopsagentAssociation#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccDevopsagentAssociationConfiguration <a name="DataAwsccDevopsagentAssociationConfiguration" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_devopsagent_association

dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfiguration()
```


### DataAwsccDevopsagentAssociationConfigurationAws <a name="DataAwsccDevopsagentAssociationConfigurationAws" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAws"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAws.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_devopsagent_association

dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAws()
```


### DataAwsccDevopsagentAssociationConfigurationAwsResources <a name="DataAwsccDevopsagentAssociationConfigurationAwsResources" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsResources"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsResources.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_devopsagent_association

dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsResources()
```


### DataAwsccDevopsagentAssociationConfigurationAwsTags <a name="DataAwsccDevopsagentAssociationConfigurationAwsTags" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsTags.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_devopsagent_association

dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsTags()
```


### DataAwsccDevopsagentAssociationConfigurationAzure <a name="DataAwsccDevopsagentAssociationConfigurationAzure" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAzure"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAzure.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_devopsagent_association

dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAzure()
```


### DataAwsccDevopsagentAssociationConfigurationDynatrace <a name="DataAwsccDevopsagentAssociationConfigurationDynatrace" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationDynatrace"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationDynatrace.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_devopsagent_association

dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationDynatrace()
```


### DataAwsccDevopsagentAssociationConfigurationEventChannel <a name="DataAwsccDevopsagentAssociationConfigurationEventChannel" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationEventChannel"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationEventChannel.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_devopsagent_association

dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationEventChannel()
```


### DataAwsccDevopsagentAssociationConfigurationGitHub <a name="DataAwsccDevopsagentAssociationConfigurationGitHub" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitHub"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitHub.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_devopsagent_association

dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitHub()
```


### DataAwsccDevopsagentAssociationConfigurationGitLab <a name="DataAwsccDevopsagentAssociationConfigurationGitLab" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitLab"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitLab.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_devopsagent_association

dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitLab()
```


### DataAwsccDevopsagentAssociationConfigurationMcpServer <a name="DataAwsccDevopsagentAssociationConfigurationMcpServer" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServer"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServer.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_devopsagent_association

dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServer()
```


### DataAwsccDevopsagentAssociationConfigurationMcpServerDatadog <a name="DataAwsccDevopsagentAssociationConfigurationMcpServerDatadog" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerDatadog"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerDatadog.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_devopsagent_association

dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerDatadog()
```


### DataAwsccDevopsagentAssociationConfigurationMcpServerGrafana <a name="DataAwsccDevopsagentAssociationConfigurationMcpServerGrafana" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerGrafana"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerGrafana.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_devopsagent_association

dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerGrafana()
```


### DataAwsccDevopsagentAssociationConfigurationMcpServerNewRelic <a name="DataAwsccDevopsagentAssociationConfigurationMcpServerNewRelic" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerNewRelic"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerNewRelic.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_devopsagent_association

dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerNewRelic()
```


### DataAwsccDevopsagentAssociationConfigurationMcpServerSigV4 <a name="DataAwsccDevopsagentAssociationConfigurationMcpServerSigV4" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSigV4"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSigV4.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_devopsagent_association

dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSigV4()
```


### DataAwsccDevopsagentAssociationConfigurationMcpServerSplunk <a name="DataAwsccDevopsagentAssociationConfigurationMcpServerSplunk" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSplunk"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSplunk.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_devopsagent_association

dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSplunk()
```


### DataAwsccDevopsagentAssociationConfigurationPagerDuty <a name="DataAwsccDevopsagentAssociationConfigurationPagerDuty" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationPagerDuty"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationPagerDuty.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_devopsagent_association

dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationPagerDuty()
```


### DataAwsccDevopsagentAssociationConfigurationServiceNow <a name="DataAwsccDevopsagentAssociationConfigurationServiceNow" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationServiceNow"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationServiceNow.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_devopsagent_association

dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationServiceNow()
```


### DataAwsccDevopsagentAssociationConfigurationSlack <a name="DataAwsccDevopsagentAssociationConfigurationSlack" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlack"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlack.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_devopsagent_association

dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlack()
```


### DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTarget <a name="DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTarget" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTarget"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTarget.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_devopsagent_association

dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTarget()
```


### DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTarget <a name="DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTarget" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTarget"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTarget.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_devopsagent_association

dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTarget()
```


### DataAwsccDevopsagentAssociationConfigurationSourceAws <a name="DataAwsccDevopsagentAssociationConfigurationSourceAws" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAws"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAws.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_devopsagent_association

dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAws()
```


### DataAwsccDevopsagentAssociationConfigurationSourceAwsResources <a name="DataAwsccDevopsagentAssociationConfigurationSourceAwsResources" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsResources"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsResources.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_devopsagent_association

dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsResources()
```


### DataAwsccDevopsagentAssociationConfigurationSourceAwsTags <a name="DataAwsccDevopsagentAssociationConfigurationSourceAwsTags" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsTags.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_devopsagent_association

dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsTags()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccDevopsagentAssociationConfigurationAwsOutputReference <a name="DataAwsccDevopsagentAssociationConfigurationAwsOutputReference" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_devopsagent_association

dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsOutputReference.property.accountId">account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsOutputReference.property.accountType">account_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsOutputReference.property.assumableRoleArn">assumable_role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsOutputReference.property.resources">resources</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsResourcesList">DataAwsccDevopsagentAssociationConfigurationAwsResourcesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsOutputReference.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsTagsList">DataAwsccDevopsagentAssociationConfigurationAwsTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAws">DataAwsccDevopsagentAssociationConfigurationAws</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsOutputReference.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

---

##### `account_type`<sup>Required</sup> <a name="account_type" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsOutputReference.property.accountType"></a>

```python
account_type: str
```

- *Type:* str

---

##### `assumable_role_arn`<sup>Required</sup> <a name="assumable_role_arn" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsOutputReference.property.assumableRoleArn"></a>

```python
assumable_role_arn: str
```

- *Type:* str

---

##### `resources`<sup>Required</sup> <a name="resources" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsOutputReference.property.resources"></a>

```python
resources: DataAwsccDevopsagentAssociationConfigurationAwsResourcesList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsResourcesList">DataAwsccDevopsagentAssociationConfigurationAwsResourcesList</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsOutputReference.property.tags"></a>

```python
tags: DataAwsccDevopsagentAssociationConfigurationAwsTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsTagsList">DataAwsccDevopsagentAssociationConfigurationAwsTagsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccDevopsagentAssociationConfigurationAws
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAws">DataAwsccDevopsagentAssociationConfigurationAws</a>

---


### DataAwsccDevopsagentAssociationConfigurationAwsResourcesList <a name="DataAwsccDevopsagentAssociationConfigurationAwsResourcesList" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsResourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsResourcesList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_devopsagent_association

dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsResourcesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsResourcesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsResourcesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsResourcesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsResourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsResourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsResourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsResourcesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsResourcesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsResourcesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsResourcesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsResourcesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsResourcesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsResourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsResourcesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsResourcesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsResourcesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsResourcesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsResourcesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccDevopsagentAssociationConfigurationAwsResourcesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsResourcesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsResourcesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsResourcesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsResourcesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsResourcesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccDevopsagentAssociationConfigurationAwsResourcesOutputReference <a name="DataAwsccDevopsagentAssociationConfigurationAwsResourcesOutputReference" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsResourcesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_devopsagent_association

dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsResourcesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsResourcesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsResourcesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsResourcesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsResourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsResourcesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsResourcesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsResourcesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsResourcesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsResourcesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsResourcesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsResourcesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsResourcesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsResourcesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsResourcesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsResourcesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsResourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsResourcesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsResourcesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsResourcesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsResourcesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsResourcesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsResourcesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsResourcesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsResourcesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsResourcesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsResourcesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsResourcesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsResourcesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsResourcesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsResourcesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsResourcesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsResourcesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsResourcesOutputReference.property.resourceArn">resource_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsResourcesOutputReference.property.resourceMetadata">resource_metadata</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsResourcesOutputReference.property.resourceType">resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsResourcesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsResources">DataAwsccDevopsagentAssociationConfigurationAwsResources</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsResourcesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsResourcesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `resource_arn`<sup>Required</sup> <a name="resource_arn" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsResourcesOutputReference.property.resourceArn"></a>

```python
resource_arn: str
```

- *Type:* str

---

##### `resource_metadata`<sup>Required</sup> <a name="resource_metadata" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsResourcesOutputReference.property.resourceMetadata"></a>

```python
resource_metadata: str
```

- *Type:* str

---

##### `resource_type`<sup>Required</sup> <a name="resource_type" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsResourcesOutputReference.property.resourceType"></a>

```python
resource_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsResourcesOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccDevopsagentAssociationConfigurationAwsResources
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsResources">DataAwsccDevopsagentAssociationConfigurationAwsResources</a>

---


### DataAwsccDevopsagentAssociationConfigurationAwsTagsList <a name="DataAwsccDevopsagentAssociationConfigurationAwsTagsList" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_devopsagent_association

dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccDevopsagentAssociationConfigurationAwsTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccDevopsagentAssociationConfigurationAwsTagsOutputReference <a name="DataAwsccDevopsagentAssociationConfigurationAwsTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_devopsagent_association

dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsTags">DataAwsccDevopsagentAssociationConfigurationAwsTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccDevopsagentAssociationConfigurationAwsTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsTags">DataAwsccDevopsagentAssociationConfigurationAwsTags</a>

---


### DataAwsccDevopsagentAssociationConfigurationAzureOutputReference <a name="DataAwsccDevopsagentAssociationConfigurationAzureOutputReference" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAzureOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAzureOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_devopsagent_association

dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAzureOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAzureOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAzureOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAzureOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAzureOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAzureOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAzureOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAzureOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAzureOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAzureOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAzureOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAzureOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAzureOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAzureOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAzureOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAzureOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAzureOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAzureOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAzureOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAzureOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAzureOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAzureOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAzureOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAzureOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAzureOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAzureOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAzureOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAzureOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAzureOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAzureOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAzureOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAzureOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAzureOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAzureOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAzureOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAzureOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAzureOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAzureOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAzureOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAzureOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAzureOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAzureOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAzureOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAzureOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAzureOutputReference.property.subscriptionId">subscription_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAzureOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAzure">DataAwsccDevopsagentAssociationConfigurationAzure</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAzureOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAzureOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `subscription_id`<sup>Required</sup> <a name="subscription_id" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAzureOutputReference.property.subscriptionId"></a>

```python
subscription_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAzureOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccDevopsagentAssociationConfigurationAzure
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAzure">DataAwsccDevopsagentAssociationConfigurationAzure</a>

---


### DataAwsccDevopsagentAssociationConfigurationDynatraceOutputReference <a name="DataAwsccDevopsagentAssociationConfigurationDynatraceOutputReference" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationDynatraceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationDynatraceOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_devopsagent_association

dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationDynatraceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationDynatraceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationDynatraceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationDynatraceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationDynatraceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationDynatraceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationDynatraceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationDynatraceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationDynatraceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationDynatraceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationDynatraceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationDynatraceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationDynatraceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationDynatraceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationDynatraceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationDynatraceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationDynatraceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationDynatraceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationDynatraceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationDynatraceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationDynatraceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationDynatraceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationDynatraceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationDynatraceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationDynatraceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationDynatraceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationDynatraceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationDynatraceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationDynatraceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationDynatraceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationDynatraceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationDynatraceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationDynatraceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationDynatraceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationDynatraceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationDynatraceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationDynatraceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationDynatraceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationDynatraceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationDynatraceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationDynatraceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationDynatraceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationDynatraceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationDynatraceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationDynatraceOutputReference.property.enableWebhookUpdates">enable_webhook_updates</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationDynatraceOutputReference.property.envId">env_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationDynatraceOutputReference.property.resources">resources</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationDynatraceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationDynatrace">DataAwsccDevopsagentAssociationConfigurationDynatrace</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationDynatraceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationDynatraceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enable_webhook_updates`<sup>Required</sup> <a name="enable_webhook_updates" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationDynatraceOutputReference.property.enableWebhookUpdates"></a>

```python
enable_webhook_updates: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `env_id`<sup>Required</sup> <a name="env_id" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationDynatraceOutputReference.property.envId"></a>

```python
env_id: str
```

- *Type:* str

---

##### `resources`<sup>Required</sup> <a name="resources" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationDynatraceOutputReference.property.resources"></a>

```python
resources: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationDynatraceOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccDevopsagentAssociationConfigurationDynatrace
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationDynatrace">DataAwsccDevopsagentAssociationConfigurationDynatrace</a>

---


### DataAwsccDevopsagentAssociationConfigurationEventChannelOutputReference <a name="DataAwsccDevopsagentAssociationConfigurationEventChannelOutputReference" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationEventChannelOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationEventChannelOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_devopsagent_association

dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationEventChannelOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationEventChannelOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationEventChannelOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationEventChannelOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationEventChannelOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationEventChannelOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationEventChannelOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationEventChannelOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationEventChannelOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationEventChannelOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationEventChannelOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationEventChannelOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationEventChannelOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationEventChannelOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationEventChannelOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationEventChannelOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationEventChannelOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationEventChannelOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationEventChannelOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationEventChannelOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationEventChannelOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationEventChannelOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationEventChannelOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationEventChannelOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationEventChannelOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationEventChannelOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationEventChannelOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationEventChannelOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationEventChannelOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationEventChannelOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationEventChannelOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationEventChannelOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationEventChannelOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationEventChannelOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationEventChannelOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationEventChannelOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationEventChannelOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationEventChannelOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationEventChannelOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationEventChannelOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationEventChannelOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationEventChannelOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationEventChannelOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationEventChannelOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationEventChannelOutputReference.property.enableWebhookUpdates">enable_webhook_updates</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationEventChannelOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationEventChannel">DataAwsccDevopsagentAssociationConfigurationEventChannel</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationEventChannelOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationEventChannelOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enable_webhook_updates`<sup>Required</sup> <a name="enable_webhook_updates" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationEventChannelOutputReference.property.enableWebhookUpdates"></a>

```python
enable_webhook_updates: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationEventChannelOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccDevopsagentAssociationConfigurationEventChannel
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationEventChannel">DataAwsccDevopsagentAssociationConfigurationEventChannel</a>

---


### DataAwsccDevopsagentAssociationConfigurationGitHubOutputReference <a name="DataAwsccDevopsagentAssociationConfigurationGitHubOutputReference" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitHubOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitHubOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_devopsagent_association

dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitHubOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitHubOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitHubOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitHubOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitHubOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitHubOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitHubOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitHubOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitHubOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitHubOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitHubOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitHubOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitHubOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitHubOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitHubOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitHubOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitHubOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitHubOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitHubOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitHubOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitHubOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitHubOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitHubOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitHubOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitHubOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitHubOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitHubOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitHubOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitHubOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitHubOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitHubOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitHubOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitHubOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitHubOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitHubOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitHubOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitHubOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitHubOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitHubOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitHubOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitHubOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitHubOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitHubOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitHubOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitHubOutputReference.property.owner">owner</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitHubOutputReference.property.ownerType">owner_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitHubOutputReference.property.repoId">repo_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitHubOutputReference.property.repoName">repo_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitHubOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitHub">DataAwsccDevopsagentAssociationConfigurationGitHub</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitHubOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitHubOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitHubOutputReference.property.owner"></a>

```python
owner: str
```

- *Type:* str

---

##### `owner_type`<sup>Required</sup> <a name="owner_type" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitHubOutputReference.property.ownerType"></a>

```python
owner_type: str
```

- *Type:* str

---

##### `repo_id`<sup>Required</sup> <a name="repo_id" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitHubOutputReference.property.repoId"></a>

```python
repo_id: str
```

- *Type:* str

---

##### `repo_name`<sup>Required</sup> <a name="repo_name" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitHubOutputReference.property.repoName"></a>

```python
repo_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitHubOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccDevopsagentAssociationConfigurationGitHub
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitHub">DataAwsccDevopsagentAssociationConfigurationGitHub</a>

---


### DataAwsccDevopsagentAssociationConfigurationGitLabOutputReference <a name="DataAwsccDevopsagentAssociationConfigurationGitLabOutputReference" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitLabOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitLabOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_devopsagent_association

dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitLabOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitLabOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitLabOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitLabOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitLabOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitLabOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitLabOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitLabOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitLabOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitLabOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitLabOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitLabOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitLabOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitLabOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitLabOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitLabOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitLabOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitLabOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitLabOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitLabOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitLabOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitLabOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitLabOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitLabOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitLabOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitLabOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitLabOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitLabOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitLabOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitLabOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitLabOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitLabOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitLabOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitLabOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitLabOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitLabOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitLabOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitLabOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitLabOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitLabOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitLabOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitLabOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitLabOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitLabOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitLabOutputReference.property.enableWebhookUpdates">enable_webhook_updates</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitLabOutputReference.property.instanceIdentifier">instance_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitLabOutputReference.property.projectId">project_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitLabOutputReference.property.projectPath">project_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitLabOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitLab">DataAwsccDevopsagentAssociationConfigurationGitLab</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitLabOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitLabOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enable_webhook_updates`<sup>Required</sup> <a name="enable_webhook_updates" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitLabOutputReference.property.enableWebhookUpdates"></a>

```python
enable_webhook_updates: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `instance_identifier`<sup>Required</sup> <a name="instance_identifier" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitLabOutputReference.property.instanceIdentifier"></a>

```python
instance_identifier: str
```

- *Type:* str

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitLabOutputReference.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

---

##### `project_path`<sup>Required</sup> <a name="project_path" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitLabOutputReference.property.projectPath"></a>

```python
project_path: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitLabOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccDevopsagentAssociationConfigurationGitLab
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitLab">DataAwsccDevopsagentAssociationConfigurationGitLab</a>

---


### DataAwsccDevopsagentAssociationConfigurationMcpServerDatadogOutputReference <a name="DataAwsccDevopsagentAssociationConfigurationMcpServerDatadogOutputReference" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerDatadogOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerDatadogOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_devopsagent_association

dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerDatadogOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerDatadogOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerDatadogOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerDatadogOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerDatadogOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerDatadogOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerDatadogOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerDatadogOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerDatadogOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerDatadogOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerDatadogOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerDatadogOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerDatadogOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerDatadogOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerDatadogOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerDatadogOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerDatadogOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerDatadogOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerDatadogOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerDatadogOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerDatadogOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerDatadogOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerDatadogOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerDatadogOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerDatadogOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerDatadogOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerDatadogOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerDatadogOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerDatadogOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerDatadogOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerDatadogOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerDatadogOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerDatadogOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerDatadogOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerDatadogOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerDatadogOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerDatadogOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerDatadogOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerDatadogOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerDatadogOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerDatadogOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerDatadogOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerDatadogOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerDatadogOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerDatadogOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerDatadogOutputReference.property.enableWebhookUpdates">enable_webhook_updates</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerDatadogOutputReference.property.endpoint">endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerDatadogOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerDatadogOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerDatadog">DataAwsccDevopsagentAssociationConfigurationMcpServerDatadog</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerDatadogOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerDatadogOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerDatadogOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `enable_webhook_updates`<sup>Required</sup> <a name="enable_webhook_updates" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerDatadogOutputReference.property.enableWebhookUpdates"></a>

```python
enable_webhook_updates: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerDatadogOutputReference.property.endpoint"></a>

```python
endpoint: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerDatadogOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerDatadogOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccDevopsagentAssociationConfigurationMcpServerDatadog
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerDatadog">DataAwsccDevopsagentAssociationConfigurationMcpServerDatadog</a>

---


### DataAwsccDevopsagentAssociationConfigurationMcpServerGrafanaOutputReference <a name="DataAwsccDevopsagentAssociationConfigurationMcpServerGrafanaOutputReference" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerGrafanaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_devopsagent_association

dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerGrafanaOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.property.enableWebhookUpdates">enable_webhook_updates</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.property.endpoint">endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.property.tools">tools</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerGrafana">DataAwsccDevopsagentAssociationConfigurationMcpServerGrafana</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enable_webhook_updates`<sup>Required</sup> <a name="enable_webhook_updates" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.property.enableWebhookUpdates"></a>

```python
enable_webhook_updates: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.property.endpoint"></a>

```python
endpoint: str
```

- *Type:* str

---

##### `tools`<sup>Required</sup> <a name="tools" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.property.tools"></a>

```python
tools: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccDevopsagentAssociationConfigurationMcpServerGrafana
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerGrafana">DataAwsccDevopsagentAssociationConfigurationMcpServerGrafana</a>

---


### DataAwsccDevopsagentAssociationConfigurationMcpServerNewRelicOutputReference <a name="DataAwsccDevopsagentAssociationConfigurationMcpServerNewRelicOutputReference" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerNewRelicOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_devopsagent_association

dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerNewRelicOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.property.accountId">account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.property.endpoint">endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerNewRelic">DataAwsccDevopsagentAssociationConfigurationMcpServerNewRelic</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.property.endpoint"></a>

```python
endpoint: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccDevopsagentAssociationConfigurationMcpServerNewRelic
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerNewRelic">DataAwsccDevopsagentAssociationConfigurationMcpServerNewRelic</a>

---


### DataAwsccDevopsagentAssociationConfigurationMcpServerOutputReference <a name="DataAwsccDevopsagentAssociationConfigurationMcpServerOutputReference" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_devopsagent_association

dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerOutputReference.property.enableWebhookUpdates">enable_webhook_updates</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerOutputReference.property.endpoint">endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerOutputReference.property.tools">tools</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServer">DataAwsccDevopsagentAssociationConfigurationMcpServer</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `enable_webhook_updates`<sup>Required</sup> <a name="enable_webhook_updates" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerOutputReference.property.enableWebhookUpdates"></a>

```python
enable_webhook_updates: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerOutputReference.property.endpoint"></a>

```python
endpoint: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `tools`<sup>Required</sup> <a name="tools" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerOutputReference.property.tools"></a>

```python
tools: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccDevopsagentAssociationConfigurationMcpServer
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServer">DataAwsccDevopsagentAssociationConfigurationMcpServer</a>

---


### DataAwsccDevopsagentAssociationConfigurationMcpServerSigV4OutputReference <a name="DataAwsccDevopsagentAssociationConfigurationMcpServerSigV4OutputReference" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSigV4OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSigV4OutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_devopsagent_association

dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSigV4OutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSigV4OutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSigV4OutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSigV4OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSigV4OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSigV4OutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSigV4OutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSigV4OutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSigV4OutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSigV4OutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSigV4OutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSigV4OutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSigV4OutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSigV4OutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSigV4OutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSigV4OutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSigV4OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSigV4OutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSigV4OutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSigV4OutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSigV4OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSigV4OutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSigV4OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSigV4OutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSigV4OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSigV4OutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSigV4OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSigV4OutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSigV4OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSigV4OutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSigV4OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSigV4OutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSigV4OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSigV4OutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSigV4OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSigV4OutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSigV4OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSigV4OutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSigV4OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSigV4OutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSigV4OutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSigV4OutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSigV4OutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSigV4OutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSigV4OutputReference.property.tools">tools</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSigV4OutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSigV4">DataAwsccDevopsagentAssociationConfigurationMcpServerSigV4</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSigV4OutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSigV4OutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `tools`<sup>Required</sup> <a name="tools" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSigV4OutputReference.property.tools"></a>

```python
tools: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSigV4OutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccDevopsagentAssociationConfigurationMcpServerSigV4
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSigV4">DataAwsccDevopsagentAssociationConfigurationMcpServerSigV4</a>

---


### DataAwsccDevopsagentAssociationConfigurationMcpServerSplunkOutputReference <a name="DataAwsccDevopsagentAssociationConfigurationMcpServerSplunkOutputReference" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSplunkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSplunkOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_devopsagent_association

dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSplunkOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSplunkOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSplunkOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSplunkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSplunkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSplunkOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSplunkOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSplunkOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSplunkOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSplunkOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSplunkOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSplunkOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSplunkOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSplunkOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSplunkOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSplunkOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSplunkOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSplunkOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSplunkOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSplunkOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSplunkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSplunkOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSplunkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSplunkOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSplunkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSplunkOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSplunkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSplunkOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSplunkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSplunkOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSplunkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSplunkOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSplunkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSplunkOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSplunkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSplunkOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSplunkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSplunkOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSplunkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSplunkOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSplunkOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSplunkOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSplunkOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSplunkOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSplunkOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSplunkOutputReference.property.enableWebhookUpdates">enable_webhook_updates</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSplunkOutputReference.property.endpoint">endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSplunkOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSplunkOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSplunk">DataAwsccDevopsagentAssociationConfigurationMcpServerSplunk</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSplunkOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSplunkOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSplunkOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `enable_webhook_updates`<sup>Required</sup> <a name="enable_webhook_updates" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSplunkOutputReference.property.enableWebhookUpdates"></a>

```python
enable_webhook_updates: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSplunkOutputReference.property.endpoint"></a>

```python
endpoint: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSplunkOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSplunkOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccDevopsagentAssociationConfigurationMcpServerSplunk
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSplunk">DataAwsccDevopsagentAssociationConfigurationMcpServerSplunk</a>

---


### DataAwsccDevopsagentAssociationConfigurationOutputReference <a name="DataAwsccDevopsagentAssociationConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_devopsagent_association

dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationOutputReference.property.aws">aws</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsOutputReference">DataAwsccDevopsagentAssociationConfigurationAwsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationOutputReference.property.azure">azure</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAzureOutputReference">DataAwsccDevopsagentAssociationConfigurationAzureOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationOutputReference.property.dynatrace">dynatrace</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationDynatraceOutputReference">DataAwsccDevopsagentAssociationConfigurationDynatraceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationOutputReference.property.eventChannel">event_channel</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationEventChannelOutputReference">DataAwsccDevopsagentAssociationConfigurationEventChannelOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationOutputReference.property.gitHub">git_hub</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitHubOutputReference">DataAwsccDevopsagentAssociationConfigurationGitHubOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationOutputReference.property.gitLab">git_lab</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitLabOutputReference">DataAwsccDevopsagentAssociationConfigurationGitLabOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationOutputReference.property.mcpServer">mcp_server</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerOutputReference">DataAwsccDevopsagentAssociationConfigurationMcpServerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationOutputReference.property.mcpServerDatadog">mcp_server_datadog</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerDatadogOutputReference">DataAwsccDevopsagentAssociationConfigurationMcpServerDatadogOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationOutputReference.property.mcpServerGrafana">mcp_server_grafana</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerGrafanaOutputReference">DataAwsccDevopsagentAssociationConfigurationMcpServerGrafanaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationOutputReference.property.mcpServerNewRelic">mcp_server_new_relic</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerNewRelicOutputReference">DataAwsccDevopsagentAssociationConfigurationMcpServerNewRelicOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationOutputReference.property.mcpServerSigV4">mcp_server_sig_v4</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSigV4OutputReference">DataAwsccDevopsagentAssociationConfigurationMcpServerSigV4OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationOutputReference.property.mcpServerSplunk">mcp_server_splunk</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSplunkOutputReference">DataAwsccDevopsagentAssociationConfigurationMcpServerSplunkOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationOutputReference.property.pagerDuty">pager_duty</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationPagerDutyOutputReference">DataAwsccDevopsagentAssociationConfigurationPagerDutyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationOutputReference.property.serviceNow">service_now</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationServiceNowOutputReference">DataAwsccDevopsagentAssociationConfigurationServiceNowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationOutputReference.property.slack">slack</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackOutputReference">DataAwsccDevopsagentAssociationConfigurationSlackOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationOutputReference.property.sourceAws">source_aws</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsOutputReference">DataAwsccDevopsagentAssociationConfigurationSourceAwsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfiguration">DataAwsccDevopsagentAssociationConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `aws`<sup>Required</sup> <a name="aws" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationOutputReference.property.aws"></a>

```python
aws: DataAwsccDevopsagentAssociationConfigurationAwsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAwsOutputReference">DataAwsccDevopsagentAssociationConfigurationAwsOutputReference</a>

---

##### `azure`<sup>Required</sup> <a name="azure" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationOutputReference.property.azure"></a>

```python
azure: DataAwsccDevopsagentAssociationConfigurationAzureOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationAzureOutputReference">DataAwsccDevopsagentAssociationConfigurationAzureOutputReference</a>

---

##### `dynatrace`<sup>Required</sup> <a name="dynatrace" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationOutputReference.property.dynatrace"></a>

```python
dynatrace: DataAwsccDevopsagentAssociationConfigurationDynatraceOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationDynatraceOutputReference">DataAwsccDevopsagentAssociationConfigurationDynatraceOutputReference</a>

---

##### `event_channel`<sup>Required</sup> <a name="event_channel" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationOutputReference.property.eventChannel"></a>

```python
event_channel: DataAwsccDevopsagentAssociationConfigurationEventChannelOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationEventChannelOutputReference">DataAwsccDevopsagentAssociationConfigurationEventChannelOutputReference</a>

---

##### `git_hub`<sup>Required</sup> <a name="git_hub" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationOutputReference.property.gitHub"></a>

```python
git_hub: DataAwsccDevopsagentAssociationConfigurationGitHubOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitHubOutputReference">DataAwsccDevopsagentAssociationConfigurationGitHubOutputReference</a>

---

##### `git_lab`<sup>Required</sup> <a name="git_lab" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationOutputReference.property.gitLab"></a>

```python
git_lab: DataAwsccDevopsagentAssociationConfigurationGitLabOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationGitLabOutputReference">DataAwsccDevopsagentAssociationConfigurationGitLabOutputReference</a>

---

##### `mcp_server`<sup>Required</sup> <a name="mcp_server" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationOutputReference.property.mcpServer"></a>

```python
mcp_server: DataAwsccDevopsagentAssociationConfigurationMcpServerOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerOutputReference">DataAwsccDevopsagentAssociationConfigurationMcpServerOutputReference</a>

---

##### `mcp_server_datadog`<sup>Required</sup> <a name="mcp_server_datadog" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationOutputReference.property.mcpServerDatadog"></a>

```python
mcp_server_datadog: DataAwsccDevopsagentAssociationConfigurationMcpServerDatadogOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerDatadogOutputReference">DataAwsccDevopsagentAssociationConfigurationMcpServerDatadogOutputReference</a>

---

##### `mcp_server_grafana`<sup>Required</sup> <a name="mcp_server_grafana" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationOutputReference.property.mcpServerGrafana"></a>

```python
mcp_server_grafana: DataAwsccDevopsagentAssociationConfigurationMcpServerGrafanaOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerGrafanaOutputReference">DataAwsccDevopsagentAssociationConfigurationMcpServerGrafanaOutputReference</a>

---

##### `mcp_server_new_relic`<sup>Required</sup> <a name="mcp_server_new_relic" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationOutputReference.property.mcpServerNewRelic"></a>

```python
mcp_server_new_relic: DataAwsccDevopsagentAssociationConfigurationMcpServerNewRelicOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerNewRelicOutputReference">DataAwsccDevopsagentAssociationConfigurationMcpServerNewRelicOutputReference</a>

---

##### `mcp_server_sig_v4`<sup>Required</sup> <a name="mcp_server_sig_v4" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationOutputReference.property.mcpServerSigV4"></a>

```python
mcp_server_sig_v4: DataAwsccDevopsagentAssociationConfigurationMcpServerSigV4OutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSigV4OutputReference">DataAwsccDevopsagentAssociationConfigurationMcpServerSigV4OutputReference</a>

---

##### `mcp_server_splunk`<sup>Required</sup> <a name="mcp_server_splunk" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationOutputReference.property.mcpServerSplunk"></a>

```python
mcp_server_splunk: DataAwsccDevopsagentAssociationConfigurationMcpServerSplunkOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationMcpServerSplunkOutputReference">DataAwsccDevopsagentAssociationConfigurationMcpServerSplunkOutputReference</a>

---

##### `pager_duty`<sup>Required</sup> <a name="pager_duty" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationOutputReference.property.pagerDuty"></a>

```python
pager_duty: DataAwsccDevopsagentAssociationConfigurationPagerDutyOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationPagerDutyOutputReference">DataAwsccDevopsagentAssociationConfigurationPagerDutyOutputReference</a>

---

##### `service_now`<sup>Required</sup> <a name="service_now" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationOutputReference.property.serviceNow"></a>

```python
service_now: DataAwsccDevopsagentAssociationConfigurationServiceNowOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationServiceNowOutputReference">DataAwsccDevopsagentAssociationConfigurationServiceNowOutputReference</a>

---

##### `slack`<sup>Required</sup> <a name="slack" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationOutputReference.property.slack"></a>

```python
slack: DataAwsccDevopsagentAssociationConfigurationSlackOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackOutputReference">DataAwsccDevopsagentAssociationConfigurationSlackOutputReference</a>

---

##### `source_aws`<sup>Required</sup> <a name="source_aws" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationOutputReference.property.sourceAws"></a>

```python
source_aws: DataAwsccDevopsagentAssociationConfigurationSourceAwsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsOutputReference">DataAwsccDevopsagentAssociationConfigurationSourceAwsOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccDevopsagentAssociationConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfiguration">DataAwsccDevopsagentAssociationConfiguration</a>

---


### DataAwsccDevopsagentAssociationConfigurationPagerDutyOutputReference <a name="DataAwsccDevopsagentAssociationConfigurationPagerDutyOutputReference" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationPagerDutyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationPagerDutyOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_devopsagent_association

dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationPagerDutyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationPagerDutyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationPagerDutyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationPagerDutyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationPagerDutyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationPagerDutyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationPagerDutyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationPagerDutyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationPagerDutyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationPagerDutyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationPagerDutyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationPagerDutyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationPagerDutyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationPagerDutyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationPagerDutyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationPagerDutyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationPagerDutyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationPagerDutyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationPagerDutyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationPagerDutyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationPagerDutyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationPagerDutyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationPagerDutyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationPagerDutyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationPagerDutyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationPagerDutyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationPagerDutyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationPagerDutyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationPagerDutyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationPagerDutyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationPagerDutyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationPagerDutyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationPagerDutyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationPagerDutyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationPagerDutyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationPagerDutyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationPagerDutyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationPagerDutyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationPagerDutyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationPagerDutyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationPagerDutyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationPagerDutyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationPagerDutyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationPagerDutyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationPagerDutyOutputReference.property.customerEmail">customer_email</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationPagerDutyOutputReference.property.enableWebhookUpdates">enable_webhook_updates</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationPagerDutyOutputReference.property.services">services</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationPagerDutyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationPagerDuty">DataAwsccDevopsagentAssociationConfigurationPagerDuty</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationPagerDutyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationPagerDutyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `customer_email`<sup>Required</sup> <a name="customer_email" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationPagerDutyOutputReference.property.customerEmail"></a>

```python
customer_email: str
```

- *Type:* str

---

##### `enable_webhook_updates`<sup>Required</sup> <a name="enable_webhook_updates" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationPagerDutyOutputReference.property.enableWebhookUpdates"></a>

```python
enable_webhook_updates: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `services`<sup>Required</sup> <a name="services" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationPagerDutyOutputReference.property.services"></a>

```python
services: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationPagerDutyOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccDevopsagentAssociationConfigurationPagerDuty
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationPagerDuty">DataAwsccDevopsagentAssociationConfigurationPagerDuty</a>

---


### DataAwsccDevopsagentAssociationConfigurationServiceNowOutputReference <a name="DataAwsccDevopsagentAssociationConfigurationServiceNowOutputReference" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationServiceNowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationServiceNowOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_devopsagent_association

dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationServiceNowOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationServiceNowOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationServiceNowOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationServiceNowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationServiceNowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationServiceNowOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationServiceNowOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationServiceNowOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationServiceNowOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationServiceNowOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationServiceNowOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationServiceNowOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationServiceNowOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationServiceNowOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationServiceNowOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationServiceNowOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationServiceNowOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationServiceNowOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationServiceNowOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationServiceNowOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationServiceNowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationServiceNowOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationServiceNowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationServiceNowOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationServiceNowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationServiceNowOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationServiceNowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationServiceNowOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationServiceNowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationServiceNowOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationServiceNowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationServiceNowOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationServiceNowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationServiceNowOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationServiceNowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationServiceNowOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationServiceNowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationServiceNowOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationServiceNowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationServiceNowOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationServiceNowOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationServiceNowOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationServiceNowOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationServiceNowOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationServiceNowOutputReference.property.enableWebhookUpdates">enable_webhook_updates</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationServiceNowOutputReference.property.instanceId">instance_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationServiceNowOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationServiceNow">DataAwsccDevopsagentAssociationConfigurationServiceNow</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationServiceNowOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationServiceNowOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enable_webhook_updates`<sup>Required</sup> <a name="enable_webhook_updates" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationServiceNowOutputReference.property.enableWebhookUpdates"></a>

```python
enable_webhook_updates: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `instance_id`<sup>Required</sup> <a name="instance_id" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationServiceNowOutputReference.property.instanceId"></a>

```python
instance_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationServiceNowOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccDevopsagentAssociationConfigurationServiceNow
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationServiceNow">DataAwsccDevopsagentAssociationConfigurationServiceNow</a>

---


### DataAwsccDevopsagentAssociationConfigurationSlackOutputReference <a name="DataAwsccDevopsagentAssociationConfigurationSlackOutputReference" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_devopsagent_association

dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackOutputReference.property.transmissionTarget">transmission_target</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference">DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackOutputReference.property.workspaceId">workspace_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackOutputReference.property.workspaceName">workspace_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlack">DataAwsccDevopsagentAssociationConfigurationSlack</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `transmission_target`<sup>Required</sup> <a name="transmission_target" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackOutputReference.property.transmissionTarget"></a>

```python
transmission_target: DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference">DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference</a>

---

##### `workspace_id`<sup>Required</sup> <a name="workspace_id" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackOutputReference.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

---

##### `workspace_name`<sup>Required</sup> <a name="workspace_name" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackOutputReference.property.workspaceName"></a>

```python
workspace_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccDevopsagentAssociationConfigurationSlack
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlack">DataAwsccDevopsagentAssociationConfigurationSlack</a>

---


### DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference <a name="DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_devopsagent_association

dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.property.channelId">channel_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.property.channelName">channel_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTarget">DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTarget</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `channel_id`<sup>Required</sup> <a name="channel_id" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.property.channelId"></a>

```python
channel_id: str
```

- *Type:* str

---

##### `channel_name`<sup>Required</sup> <a name="channel_name" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.property.channelName"></a>

```python
channel_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTarget
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTarget">DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTarget</a>

---


### DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference <a name="DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_devopsagent_association

dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.property.incidentResponseTarget">incident_response_target</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference">DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTarget">DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTarget</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `incident_response_target`<sup>Required</sup> <a name="incident_response_target" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.property.incidentResponseTarget"></a>

```python
incident_response_target: DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference">DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTarget
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTarget">DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTarget</a>

---


### DataAwsccDevopsagentAssociationConfigurationSourceAwsOutputReference <a name="DataAwsccDevopsagentAssociationConfigurationSourceAwsOutputReference" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_devopsagent_association

dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsOutputReference.property.accountId">account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsOutputReference.property.accountType">account_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsOutputReference.property.assumableRoleArn">assumable_role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsOutputReference.property.resources">resources</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsResourcesList">DataAwsccDevopsagentAssociationConfigurationSourceAwsResourcesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsOutputReference.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsTagsList">DataAwsccDevopsagentAssociationConfigurationSourceAwsTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAws">DataAwsccDevopsagentAssociationConfigurationSourceAws</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsOutputReference.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

---

##### `account_type`<sup>Required</sup> <a name="account_type" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsOutputReference.property.accountType"></a>

```python
account_type: str
```

- *Type:* str

---

##### `assumable_role_arn`<sup>Required</sup> <a name="assumable_role_arn" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsOutputReference.property.assumableRoleArn"></a>

```python
assumable_role_arn: str
```

- *Type:* str

---

##### `resources`<sup>Required</sup> <a name="resources" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsOutputReference.property.resources"></a>

```python
resources: DataAwsccDevopsagentAssociationConfigurationSourceAwsResourcesList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsResourcesList">DataAwsccDevopsagentAssociationConfigurationSourceAwsResourcesList</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsOutputReference.property.tags"></a>

```python
tags: DataAwsccDevopsagentAssociationConfigurationSourceAwsTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsTagsList">DataAwsccDevopsagentAssociationConfigurationSourceAwsTagsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccDevopsagentAssociationConfigurationSourceAws
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAws">DataAwsccDevopsagentAssociationConfigurationSourceAws</a>

---


### DataAwsccDevopsagentAssociationConfigurationSourceAwsResourcesList <a name="DataAwsccDevopsagentAssociationConfigurationSourceAwsResourcesList" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsResourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsResourcesList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_devopsagent_association

dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsResourcesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsResourcesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsResourcesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsResourcesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsResourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsResourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsResourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsResourcesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsResourcesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsResourcesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsResourcesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsResourcesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsResourcesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsResourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsResourcesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsResourcesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsResourcesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsResourcesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsResourcesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccDevopsagentAssociationConfigurationSourceAwsResourcesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsResourcesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsResourcesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsResourcesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsResourcesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsResourcesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccDevopsagentAssociationConfigurationSourceAwsResourcesOutputReference <a name="DataAwsccDevopsagentAssociationConfigurationSourceAwsResourcesOutputReference" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_devopsagent_association

dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsResourcesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.property.resourceArn">resource_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.property.resourceMetadata">resource_metadata</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.property.resourceType">resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsResources">DataAwsccDevopsagentAssociationConfigurationSourceAwsResources</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `resource_arn`<sup>Required</sup> <a name="resource_arn" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.property.resourceArn"></a>

```python
resource_arn: str
```

- *Type:* str

---

##### `resource_metadata`<sup>Required</sup> <a name="resource_metadata" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.property.resourceMetadata"></a>

```python
resource_metadata: str
```

- *Type:* str

---

##### `resource_type`<sup>Required</sup> <a name="resource_type" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.property.resourceType"></a>

```python
resource_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccDevopsagentAssociationConfigurationSourceAwsResources
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsResources">DataAwsccDevopsagentAssociationConfigurationSourceAwsResources</a>

---


### DataAwsccDevopsagentAssociationConfigurationSourceAwsTagsList <a name="DataAwsccDevopsagentAssociationConfigurationSourceAwsTagsList" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_devopsagent_association

dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccDevopsagentAssociationConfigurationSourceAwsTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccDevopsagentAssociationConfigurationSourceAwsTagsOutputReference <a name="DataAwsccDevopsagentAssociationConfigurationSourceAwsTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_devopsagent_association

dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsTags">DataAwsccDevopsagentAssociationConfigurationSourceAwsTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccDevopsagentAssociationConfigurationSourceAwsTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsagentAssociation.DataAwsccDevopsagentAssociationConfigurationSourceAwsTags">DataAwsccDevopsagentAssociationConfigurationSourceAwsTags</a>

---



