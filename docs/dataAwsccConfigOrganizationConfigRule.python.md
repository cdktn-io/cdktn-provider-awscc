# `dataAwsccConfigOrganizationConfigRule` Submodule <a name="`dataAwsccConfigOrganizationConfigRule` Submodule" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccConfigOrganizationConfigRule <a name="DataAwsccConfigOrganizationConfigRule" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/data-sources/config_organization_config_rule awscc_config_organization_config_rule}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_config_organization_config_rule

dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/data-sources/config_organization_config_rule#id DataAwsccConfigOrganizationConfigRule#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccConfigOrganizationConfigRule resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_config_organization_config_rule

dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_config_organization_config_rule

dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_config_organization_config_rule

dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_config_organization_config_rule

dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccConfigOrganizationConfigRule resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccConfigOrganizationConfigRule to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccConfigOrganizationConfigRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/data-sources/config_organization_config_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccConfigOrganizationConfigRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.property.excludedAccounts">excluded_accounts</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.property.organizationConfigRuleArn">organization_config_rule_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.property.organizationConfigRuleName">organization_config_rule_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.property.organizationCustomPolicyRuleMetadata">organization_custom_policy_rule_metadata</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference">DataAwsccConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.property.organizationCustomRuleMetadata">organization_custom_rule_metadata</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference">DataAwsccConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.property.organizationManagedRuleMetadata">organization_managed_rule_metadata</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference">DataAwsccConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `excluded_accounts`<sup>Required</sup> <a name="excluded_accounts" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.property.excludedAccounts"></a>

```python
excluded_accounts: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `organization_config_rule_arn`<sup>Required</sup> <a name="organization_config_rule_arn" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.property.organizationConfigRuleArn"></a>

```python
organization_config_rule_arn: str
```

- *Type:* str

---

##### `organization_config_rule_name`<sup>Required</sup> <a name="organization_config_rule_name" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.property.organizationConfigRuleName"></a>

```python
organization_config_rule_name: str
```

- *Type:* str

---

##### `organization_custom_policy_rule_metadata`<sup>Required</sup> <a name="organization_custom_policy_rule_metadata" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.property.organizationCustomPolicyRuleMetadata"></a>

```python
organization_custom_policy_rule_metadata: DataAwsccConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference">DataAwsccConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference</a>

---

##### `organization_custom_rule_metadata`<sup>Required</sup> <a name="organization_custom_rule_metadata" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.property.organizationCustomRuleMetadata"></a>

```python
organization_custom_rule_metadata: DataAwsccConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference">DataAwsccConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference</a>

---

##### `organization_managed_rule_metadata`<sup>Required</sup> <a name="organization_managed_rule_metadata" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.property.organizationManagedRuleMetadata"></a>

```python
organization_managed_rule_metadata: DataAwsccConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference">DataAwsccConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccConfigOrganizationConfigRuleConfig <a name="DataAwsccConfigOrganizationConfigRuleConfig" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_config_organization_config_rule

dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/data-sources/config_organization_config_rule#id DataAwsccConfigOrganizationConfigRule#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadata <a name="DataAwsccConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadata" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadata.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_config_organization_config_rule

dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadata()
```


### DataAwsccConfigOrganizationConfigRuleOrganizationCustomRuleMetadata <a name="DataAwsccConfigOrganizationConfigRuleOrganizationCustomRuleMetadata" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomRuleMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomRuleMetadata.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_config_organization_config_rule

dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomRuleMetadata()
```


### DataAwsccConfigOrganizationConfigRuleOrganizationManagedRuleMetadata <a name="DataAwsccConfigOrganizationConfigRuleOrganizationManagedRuleMetadata" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationManagedRuleMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationManagedRuleMetadata.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_config_organization_config_rule

dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationManagedRuleMetadata()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference <a name="DataAwsccConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_config_organization_config_rule

dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.property.debugLogDeliveryAccounts">debug_log_delivery_accounts</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.property.inputParameters">input_parameters</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.property.organizationConfigRuleTriggerTypes">organization_config_rule_trigger_types</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.property.policyText">policy_text</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.property.resourceIdScope">resource_id_scope</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.property.resourceTypesScope">resource_types_scope</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.property.runtime">runtime</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.property.tagKeyScope">tag_key_scope</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.property.tagValueScope">tag_value_scope</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadata">DataAwsccConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadata</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `debug_log_delivery_accounts`<sup>Required</sup> <a name="debug_log_delivery_accounts" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.property.debugLogDeliveryAccounts"></a>

```python
debug_log_delivery_accounts: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `input_parameters`<sup>Required</sup> <a name="input_parameters" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.property.inputParameters"></a>

```python
input_parameters: str
```

- *Type:* str

---

##### `organization_config_rule_trigger_types`<sup>Required</sup> <a name="organization_config_rule_trigger_types" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.property.organizationConfigRuleTriggerTypes"></a>

```python
organization_config_rule_trigger_types: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `policy_text`<sup>Required</sup> <a name="policy_text" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.property.policyText"></a>

```python
policy_text: str
```

- *Type:* str

---

##### `resource_id_scope`<sup>Required</sup> <a name="resource_id_scope" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.property.resourceIdScope"></a>

```python
resource_id_scope: str
```

- *Type:* str

---

##### `resource_types_scope`<sup>Required</sup> <a name="resource_types_scope" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.property.resourceTypesScope"></a>

```python
resource_types_scope: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `runtime`<sup>Required</sup> <a name="runtime" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.property.runtime"></a>

```python
runtime: str
```

- *Type:* str

---

##### `tag_key_scope`<sup>Required</sup> <a name="tag_key_scope" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.property.tagKeyScope"></a>

```python
tag_key_scope: str
```

- *Type:* str

---

##### `tag_value_scope`<sup>Required</sup> <a name="tag_value_scope" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.property.tagValueScope"></a>

```python
tag_value_scope: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadata
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadata">DataAwsccConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadata</a>

---


### DataAwsccConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference <a name="DataAwsccConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_config_organization_config_rule

dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.property.inputParameters">input_parameters</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.property.lambdaFunctionArn">lambda_function_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.property.maximumExecutionFrequency">maximum_execution_frequency</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.property.organizationConfigRuleTriggerTypes">organization_config_rule_trigger_types</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.property.resourceIdScope">resource_id_scope</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.property.resourceTypesScope">resource_types_scope</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.property.tagKeyScope">tag_key_scope</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.property.tagValueScope">tag_value_scope</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomRuleMetadata">DataAwsccConfigOrganizationConfigRuleOrganizationCustomRuleMetadata</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `input_parameters`<sup>Required</sup> <a name="input_parameters" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.property.inputParameters"></a>

```python
input_parameters: str
```

- *Type:* str

---

##### `lambda_function_arn`<sup>Required</sup> <a name="lambda_function_arn" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.property.lambdaFunctionArn"></a>

```python
lambda_function_arn: str
```

- *Type:* str

---

##### `maximum_execution_frequency`<sup>Required</sup> <a name="maximum_execution_frequency" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.property.maximumExecutionFrequency"></a>

```python
maximum_execution_frequency: str
```

- *Type:* str

---

##### `organization_config_rule_trigger_types`<sup>Required</sup> <a name="organization_config_rule_trigger_types" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.property.organizationConfigRuleTriggerTypes"></a>

```python
organization_config_rule_trigger_types: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `resource_id_scope`<sup>Required</sup> <a name="resource_id_scope" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.property.resourceIdScope"></a>

```python
resource_id_scope: str
```

- *Type:* str

---

##### `resource_types_scope`<sup>Required</sup> <a name="resource_types_scope" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.property.resourceTypesScope"></a>

```python
resource_types_scope: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tag_key_scope`<sup>Required</sup> <a name="tag_key_scope" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.property.tagKeyScope"></a>

```python
tag_key_scope: str
```

- *Type:* str

---

##### `tag_value_scope`<sup>Required</sup> <a name="tag_value_scope" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.property.tagValueScope"></a>

```python
tag_value_scope: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccConfigOrganizationConfigRuleOrganizationCustomRuleMetadata
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomRuleMetadata">DataAwsccConfigOrganizationConfigRuleOrganizationCustomRuleMetadata</a>

---


### DataAwsccConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference <a name="DataAwsccConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_config_organization_config_rule

dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.property.inputParameters">input_parameters</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.property.maximumExecutionFrequency">maximum_execution_frequency</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.property.resourceIdScope">resource_id_scope</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.property.resourceTypesScope">resource_types_scope</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.property.ruleIdentifier">rule_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.property.tagKeyScope">tag_key_scope</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.property.tagValueScope">tag_value_scope</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationManagedRuleMetadata">DataAwsccConfigOrganizationConfigRuleOrganizationManagedRuleMetadata</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `input_parameters`<sup>Required</sup> <a name="input_parameters" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.property.inputParameters"></a>

```python
input_parameters: str
```

- *Type:* str

---

##### `maximum_execution_frequency`<sup>Required</sup> <a name="maximum_execution_frequency" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.property.maximumExecutionFrequency"></a>

```python
maximum_execution_frequency: str
```

- *Type:* str

---

##### `resource_id_scope`<sup>Required</sup> <a name="resource_id_scope" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.property.resourceIdScope"></a>

```python
resource_id_scope: str
```

- *Type:* str

---

##### `resource_types_scope`<sup>Required</sup> <a name="resource_types_scope" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.property.resourceTypesScope"></a>

```python
resource_types_scope: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `rule_identifier`<sup>Required</sup> <a name="rule_identifier" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.property.ruleIdentifier"></a>

```python
rule_identifier: str
```

- *Type:* str

---

##### `tag_key_scope`<sup>Required</sup> <a name="tag_key_scope" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.property.tagKeyScope"></a>

```python
tag_key_scope: str
```

- *Type:* str

---

##### `tag_value_scope`<sup>Required</sup> <a name="tag_value_scope" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.property.tagValueScope"></a>

```python
tag_value_scope: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccConfigOrganizationConfigRuleOrganizationManagedRuleMetadata
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationManagedRuleMetadata">DataAwsccConfigOrganizationConfigRuleOrganizationManagedRuleMetadata</a>

---



