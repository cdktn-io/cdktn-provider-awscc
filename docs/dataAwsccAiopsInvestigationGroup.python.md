# `dataAwsccAiopsInvestigationGroup` Submodule <a name="`dataAwsccAiopsInvestigationGroup` Submodule" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccAiopsInvestigationGroup <a name="DataAwsccAiopsInvestigationGroup" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/aiops_investigation_group awscc_aiops_investigation_group}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_aiops_investigation_group

dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/aiops_investigation_group#id DataAwsccAiopsInvestigationGroup#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccAiopsInvestigationGroup resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_aiops_investigation_group

dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_aiops_investigation_group

dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_aiops_investigation_group

dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_aiops_investigation_group

dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccAiopsInvestigationGroup resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccAiopsInvestigationGroup to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccAiopsInvestigationGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/aiops_investigation_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccAiopsInvestigationGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.property.chatbotNotificationChannels">chatbot_notification_channels</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupChatbotNotificationChannelsList">DataAwsccAiopsInvestigationGroupChatbotNotificationChannelsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.property.createdBy">created_by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.property.crossAccountConfigurations">cross_account_configurations</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupCrossAccountConfigurationsList">DataAwsccAiopsInvestigationGroupCrossAccountConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.property.encryptionConfig">encryption_config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupEncryptionConfigOutputReference">DataAwsccAiopsInvestigationGroupEncryptionConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.property.investigationGroupPolicy">investigation_group_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.property.isCloudTrailEventHistoryEnabled">is_cloud_trail_event_history_enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.property.lastModifiedAt">last_modified_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.property.lastModifiedBy">last_modified_by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.property.retentionInDays">retention_in_days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.property.roleArn">role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.property.tagKeyBoundaries">tag_key_boundaries</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupTagsList">DataAwsccAiopsInvestigationGroupTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `chatbot_notification_channels`<sup>Required</sup> <a name="chatbot_notification_channels" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.property.chatbotNotificationChannels"></a>

```python
chatbot_notification_channels: DataAwsccAiopsInvestigationGroupChatbotNotificationChannelsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupChatbotNotificationChannelsList">DataAwsccAiopsInvestigationGroupChatbotNotificationChannelsList</a>

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `created_by`<sup>Required</sup> <a name="created_by" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.property.createdBy"></a>

```python
created_by: str
```

- *Type:* str

---

##### `cross_account_configurations`<sup>Required</sup> <a name="cross_account_configurations" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.property.crossAccountConfigurations"></a>

```python
cross_account_configurations: DataAwsccAiopsInvestigationGroupCrossAccountConfigurationsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupCrossAccountConfigurationsList">DataAwsccAiopsInvestigationGroupCrossAccountConfigurationsList</a>

---

##### `encryption_config`<sup>Required</sup> <a name="encryption_config" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.property.encryptionConfig"></a>

```python
encryption_config: DataAwsccAiopsInvestigationGroupEncryptionConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupEncryptionConfigOutputReference">DataAwsccAiopsInvestigationGroupEncryptionConfigOutputReference</a>

---

##### `investigation_group_policy`<sup>Required</sup> <a name="investigation_group_policy" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.property.investigationGroupPolicy"></a>

```python
investigation_group_policy: str
```

- *Type:* str

---

##### `is_cloud_trail_event_history_enabled`<sup>Required</sup> <a name="is_cloud_trail_event_history_enabled" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.property.isCloudTrailEventHistoryEnabled"></a>

```python
is_cloud_trail_event_history_enabled: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `last_modified_at`<sup>Required</sup> <a name="last_modified_at" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.property.lastModifiedAt"></a>

```python
last_modified_at: str
```

- *Type:* str

---

##### `last_modified_by`<sup>Required</sup> <a name="last_modified_by" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.property.lastModifiedBy"></a>

```python
last_modified_by: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `retention_in_days`<sup>Required</sup> <a name="retention_in_days" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.property.retentionInDays"></a>

```python
retention_in_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

---

##### `tag_key_boundaries`<sup>Required</sup> <a name="tag_key_boundaries" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.property.tagKeyBoundaries"></a>

```python
tag_key_boundaries: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.property.tags"></a>

```python
tags: DataAwsccAiopsInvestigationGroupTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupTagsList">DataAwsccAiopsInvestigationGroupTagsList</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccAiopsInvestigationGroupChatbotNotificationChannels <a name="DataAwsccAiopsInvestigationGroupChatbotNotificationChannels" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupChatbotNotificationChannels"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupChatbotNotificationChannels.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_aiops_investigation_group

dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupChatbotNotificationChannels()
```


### DataAwsccAiopsInvestigationGroupConfig <a name="DataAwsccAiopsInvestigationGroupConfig" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_aiops_investigation_group

dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/aiops_investigation_group#id DataAwsccAiopsInvestigationGroup#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccAiopsInvestigationGroupCrossAccountConfigurations <a name="DataAwsccAiopsInvestigationGroupCrossAccountConfigurations" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupCrossAccountConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupCrossAccountConfigurations.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_aiops_investigation_group

dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupCrossAccountConfigurations()
```


### DataAwsccAiopsInvestigationGroupEncryptionConfig <a name="DataAwsccAiopsInvestigationGroupEncryptionConfig" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupEncryptionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupEncryptionConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_aiops_investigation_group

dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupEncryptionConfig()
```


### DataAwsccAiopsInvestigationGroupTags <a name="DataAwsccAiopsInvestigationGroupTags" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupTags.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_aiops_investigation_group

dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupTags()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccAiopsInvestigationGroupChatbotNotificationChannelsList <a name="DataAwsccAiopsInvestigationGroupChatbotNotificationChannelsList" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupChatbotNotificationChannelsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupChatbotNotificationChannelsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_aiops_investigation_group

dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupChatbotNotificationChannelsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupChatbotNotificationChannelsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupChatbotNotificationChannelsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupChatbotNotificationChannelsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupChatbotNotificationChannelsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupChatbotNotificationChannelsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupChatbotNotificationChannelsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupChatbotNotificationChannelsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupChatbotNotificationChannelsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupChatbotNotificationChannelsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupChatbotNotificationChannelsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupChatbotNotificationChannelsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupChatbotNotificationChannelsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupChatbotNotificationChannelsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupChatbotNotificationChannelsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupChatbotNotificationChannelsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupChatbotNotificationChannelsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupChatbotNotificationChannelsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupChatbotNotificationChannelsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccAiopsInvestigationGroupChatbotNotificationChannelsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupChatbotNotificationChannelsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupChatbotNotificationChannelsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupChatbotNotificationChannelsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupChatbotNotificationChannelsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupChatbotNotificationChannelsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccAiopsInvestigationGroupChatbotNotificationChannelsOutputReference <a name="DataAwsccAiopsInvestigationGroupChatbotNotificationChannelsOutputReference" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupChatbotNotificationChannelsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupChatbotNotificationChannelsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_aiops_investigation_group

dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupChatbotNotificationChannelsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupChatbotNotificationChannelsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupChatbotNotificationChannelsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupChatbotNotificationChannelsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupChatbotNotificationChannelsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupChatbotNotificationChannelsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupChatbotNotificationChannelsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupChatbotNotificationChannelsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupChatbotNotificationChannelsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupChatbotNotificationChannelsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupChatbotNotificationChannelsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupChatbotNotificationChannelsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupChatbotNotificationChannelsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupChatbotNotificationChannelsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupChatbotNotificationChannelsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupChatbotNotificationChannelsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupChatbotNotificationChannelsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupChatbotNotificationChannelsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupChatbotNotificationChannelsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupChatbotNotificationChannelsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupChatbotNotificationChannelsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupChatbotNotificationChannelsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupChatbotNotificationChannelsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupChatbotNotificationChannelsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupChatbotNotificationChannelsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupChatbotNotificationChannelsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupChatbotNotificationChannelsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupChatbotNotificationChannelsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupChatbotNotificationChannelsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupChatbotNotificationChannelsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupChatbotNotificationChannelsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupChatbotNotificationChannelsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupChatbotNotificationChannelsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupChatbotNotificationChannelsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupChatbotNotificationChannelsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupChatbotNotificationChannelsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupChatbotNotificationChannelsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupChatbotNotificationChannelsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupChatbotNotificationChannelsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupChatbotNotificationChannelsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupChatbotNotificationChannelsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupChatbotNotificationChannelsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupChatbotNotificationChannelsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupChatbotNotificationChannelsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupChatbotNotificationChannelsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupChatbotNotificationChannelsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupChatbotNotificationChannelsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupChatbotNotificationChannelsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupChatbotNotificationChannelsOutputReference.property.chatConfigurationArns">chat_configuration_arns</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupChatbotNotificationChannelsOutputReference.property.snsTopicArn">sns_topic_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupChatbotNotificationChannelsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupChatbotNotificationChannels">DataAwsccAiopsInvestigationGroupChatbotNotificationChannels</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupChatbotNotificationChannelsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupChatbotNotificationChannelsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `chat_configuration_arns`<sup>Required</sup> <a name="chat_configuration_arns" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupChatbotNotificationChannelsOutputReference.property.chatConfigurationArns"></a>

```python
chat_configuration_arns: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `sns_topic_arn`<sup>Required</sup> <a name="sns_topic_arn" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupChatbotNotificationChannelsOutputReference.property.snsTopicArn"></a>

```python
sns_topic_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupChatbotNotificationChannelsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccAiopsInvestigationGroupChatbotNotificationChannels
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupChatbotNotificationChannels">DataAwsccAiopsInvestigationGroupChatbotNotificationChannels</a>

---


### DataAwsccAiopsInvestigationGroupCrossAccountConfigurationsList <a name="DataAwsccAiopsInvestigationGroupCrossAccountConfigurationsList" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupCrossAccountConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupCrossAccountConfigurationsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_aiops_investigation_group

dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupCrossAccountConfigurationsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupCrossAccountConfigurationsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupCrossAccountConfigurationsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupCrossAccountConfigurationsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupCrossAccountConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupCrossAccountConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupCrossAccountConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupCrossAccountConfigurationsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupCrossAccountConfigurationsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupCrossAccountConfigurationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupCrossAccountConfigurationsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupCrossAccountConfigurationsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupCrossAccountConfigurationsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupCrossAccountConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupCrossAccountConfigurationsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupCrossAccountConfigurationsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupCrossAccountConfigurationsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupCrossAccountConfigurationsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupCrossAccountConfigurationsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccAiopsInvestigationGroupCrossAccountConfigurationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupCrossAccountConfigurationsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupCrossAccountConfigurationsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupCrossAccountConfigurationsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupCrossAccountConfigurationsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupCrossAccountConfigurationsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccAiopsInvestigationGroupCrossAccountConfigurationsOutputReference <a name="DataAwsccAiopsInvestigationGroupCrossAccountConfigurationsOutputReference" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupCrossAccountConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupCrossAccountConfigurationsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_aiops_investigation_group

dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupCrossAccountConfigurationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupCrossAccountConfigurationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupCrossAccountConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupCrossAccountConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupCrossAccountConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupCrossAccountConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupCrossAccountConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupCrossAccountConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupCrossAccountConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupCrossAccountConfigurationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupCrossAccountConfigurationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupCrossAccountConfigurationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupCrossAccountConfigurationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupCrossAccountConfigurationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupCrossAccountConfigurationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupCrossAccountConfigurationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupCrossAccountConfigurationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupCrossAccountConfigurationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupCrossAccountConfigurationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupCrossAccountConfigurationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupCrossAccountConfigurationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupCrossAccountConfigurationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupCrossAccountConfigurationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupCrossAccountConfigurationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupCrossAccountConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupCrossAccountConfigurationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupCrossAccountConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupCrossAccountConfigurationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupCrossAccountConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupCrossAccountConfigurationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupCrossAccountConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupCrossAccountConfigurationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupCrossAccountConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupCrossAccountConfigurationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupCrossAccountConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupCrossAccountConfigurationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupCrossAccountConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupCrossAccountConfigurationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupCrossAccountConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupCrossAccountConfigurationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupCrossAccountConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupCrossAccountConfigurationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupCrossAccountConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupCrossAccountConfigurationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupCrossAccountConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupCrossAccountConfigurationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupCrossAccountConfigurationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupCrossAccountConfigurationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupCrossAccountConfigurationsOutputReference.property.sourceRoleArn">source_role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupCrossAccountConfigurationsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupCrossAccountConfigurations">DataAwsccAiopsInvestigationGroupCrossAccountConfigurations</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupCrossAccountConfigurationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupCrossAccountConfigurationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `source_role_arn`<sup>Required</sup> <a name="source_role_arn" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupCrossAccountConfigurationsOutputReference.property.sourceRoleArn"></a>

```python
source_role_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupCrossAccountConfigurationsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccAiopsInvestigationGroupCrossAccountConfigurations
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupCrossAccountConfigurations">DataAwsccAiopsInvestigationGroupCrossAccountConfigurations</a>

---


### DataAwsccAiopsInvestigationGroupEncryptionConfigOutputReference <a name="DataAwsccAiopsInvestigationGroupEncryptionConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupEncryptionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupEncryptionConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_aiops_investigation_group

dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupEncryptionConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupEncryptionConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupEncryptionConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupEncryptionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupEncryptionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupEncryptionConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupEncryptionConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupEncryptionConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupEncryptionConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupEncryptionConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupEncryptionConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupEncryptionConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupEncryptionConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupEncryptionConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupEncryptionConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupEncryptionConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupEncryptionConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupEncryptionConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupEncryptionConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupEncryptionConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupEncryptionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupEncryptionConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupEncryptionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupEncryptionConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupEncryptionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupEncryptionConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupEncryptionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupEncryptionConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupEncryptionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupEncryptionConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupEncryptionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupEncryptionConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupEncryptionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupEncryptionConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupEncryptionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupEncryptionConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupEncryptionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupEncryptionConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupEncryptionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupEncryptionConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupEncryptionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupEncryptionConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupEncryptionConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupEncryptionConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupEncryptionConfigOutputReference.property.encryptionConfigurationType">encryption_configuration_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupEncryptionConfigOutputReference.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupEncryptionConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupEncryptionConfig">DataAwsccAiopsInvestigationGroupEncryptionConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupEncryptionConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupEncryptionConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `encryption_configuration_type`<sup>Required</sup> <a name="encryption_configuration_type" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupEncryptionConfigOutputReference.property.encryptionConfigurationType"></a>

```python
encryption_configuration_type: str
```

- *Type:* str

---

##### `kms_key_id`<sup>Required</sup> <a name="kms_key_id" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupEncryptionConfigOutputReference.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupEncryptionConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccAiopsInvestigationGroupEncryptionConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupEncryptionConfig">DataAwsccAiopsInvestigationGroupEncryptionConfig</a>

---


### DataAwsccAiopsInvestigationGroupTagsList <a name="DataAwsccAiopsInvestigationGroupTagsList" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_aiops_investigation_group

dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccAiopsInvestigationGroupTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccAiopsInvestigationGroupTagsOutputReference <a name="DataAwsccAiopsInvestigationGroupTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_aiops_investigation_group

dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupTags">DataAwsccAiopsInvestigationGroupTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccAiopsInvestigationGroupTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupTags">DataAwsccAiopsInvestigationGroupTags</a>

---



