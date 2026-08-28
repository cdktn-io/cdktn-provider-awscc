# `dataAwsccNotificationscontactsEmailContact` Submodule <a name="`dataAwsccNotificationscontactsEmailContact` Submodule" id="@cdktn/provider-awscc.dataAwsccNotificationscontactsEmailContact"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccNotificationscontactsEmailContact <a name="DataAwsccNotificationscontactsEmailContact" id="@cdktn/provider-awscc.dataAwsccNotificationscontactsEmailContact.DataAwsccNotificationscontactsEmailContact"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/notificationscontacts_email_contact awscc_notificationscontacts_email_contact}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNotificationscontactsEmailContact.DataAwsccNotificationscontactsEmailContact.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_notificationscontacts_email_contact

dataAwsccNotificationscontactsEmailContact.DataAwsccNotificationscontactsEmailContact(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccNotificationscontactsEmailContact.DataAwsccNotificationscontactsEmailContact.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNotificationscontactsEmailContact.DataAwsccNotificationscontactsEmailContact.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNotificationscontactsEmailContact.DataAwsccNotificationscontactsEmailContact.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNotificationscontactsEmailContact.DataAwsccNotificationscontactsEmailContact.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNotificationscontactsEmailContact.DataAwsccNotificationscontactsEmailContact.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNotificationscontactsEmailContact.DataAwsccNotificationscontactsEmailContact.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNotificationscontactsEmailContact.DataAwsccNotificationscontactsEmailContact.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNotificationscontactsEmailContact.DataAwsccNotificationscontactsEmailContact.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNotificationscontactsEmailContact.DataAwsccNotificationscontactsEmailContact.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNotificationscontactsEmailContact.DataAwsccNotificationscontactsEmailContact.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccNotificationscontactsEmailContact.DataAwsccNotificationscontactsEmailContact.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccNotificationscontactsEmailContact.DataAwsccNotificationscontactsEmailContact.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccNotificationscontactsEmailContact.DataAwsccNotificationscontactsEmailContact.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccNotificationscontactsEmailContact.DataAwsccNotificationscontactsEmailContact.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccNotificationscontactsEmailContact.DataAwsccNotificationscontactsEmailContact.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccNotificationscontactsEmailContact.DataAwsccNotificationscontactsEmailContact.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccNotificationscontactsEmailContact.DataAwsccNotificationscontactsEmailContact.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccNotificationscontactsEmailContact.DataAwsccNotificationscontactsEmailContact.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccNotificationscontactsEmailContact.DataAwsccNotificationscontactsEmailContact.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccNotificationscontactsEmailContact.DataAwsccNotificationscontactsEmailContact.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/notificationscontacts_email_contact#id DataAwsccNotificationscontactsEmailContact#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNotificationscontactsEmailContact.DataAwsccNotificationscontactsEmailContact.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNotificationscontactsEmailContact.DataAwsccNotificationscontactsEmailContact.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNotificationscontactsEmailContact.DataAwsccNotificationscontactsEmailContact.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNotificationscontactsEmailContact.DataAwsccNotificationscontactsEmailContact.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNotificationscontactsEmailContact.DataAwsccNotificationscontactsEmailContact.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNotificationscontactsEmailContact.DataAwsccNotificationscontactsEmailContact.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNotificationscontactsEmailContact.DataAwsccNotificationscontactsEmailContact.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNotificationscontactsEmailContact.DataAwsccNotificationscontactsEmailContact.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNotificationscontactsEmailContact.DataAwsccNotificationscontactsEmailContact.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNotificationscontactsEmailContact.DataAwsccNotificationscontactsEmailContact.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNotificationscontactsEmailContact.DataAwsccNotificationscontactsEmailContact.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNotificationscontactsEmailContact.DataAwsccNotificationscontactsEmailContact.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNotificationscontactsEmailContact.DataAwsccNotificationscontactsEmailContact.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNotificationscontactsEmailContact.DataAwsccNotificationscontactsEmailContact.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNotificationscontactsEmailContact.DataAwsccNotificationscontactsEmailContact.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNotificationscontactsEmailContact.DataAwsccNotificationscontactsEmailContact.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNotificationscontactsEmailContact.DataAwsccNotificationscontactsEmailContact.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNotificationscontactsEmailContact.DataAwsccNotificationscontactsEmailContact.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccNotificationscontactsEmailContact.DataAwsccNotificationscontactsEmailContact.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccNotificationscontactsEmailContact.DataAwsccNotificationscontactsEmailContact.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccNotificationscontactsEmailContact.DataAwsccNotificationscontactsEmailContact.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccNotificationscontactsEmailContact.DataAwsccNotificationscontactsEmailContact.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccNotificationscontactsEmailContact.DataAwsccNotificationscontactsEmailContact.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccNotificationscontactsEmailContact.DataAwsccNotificationscontactsEmailContact.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccNotificationscontactsEmailContact.DataAwsccNotificationscontactsEmailContact.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccNotificationscontactsEmailContact.DataAwsccNotificationscontactsEmailContact.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccNotificationscontactsEmailContact.DataAwsccNotificationscontactsEmailContact.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccNotificationscontactsEmailContact.DataAwsccNotificationscontactsEmailContact.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccNotificationscontactsEmailContact.DataAwsccNotificationscontactsEmailContact.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccNotificationscontactsEmailContact.DataAwsccNotificationscontactsEmailContact.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccNotificationscontactsEmailContact.DataAwsccNotificationscontactsEmailContact.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNotificationscontactsEmailContact.DataAwsccNotificationscontactsEmailContact.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccNotificationscontactsEmailContact.DataAwsccNotificationscontactsEmailContact.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNotificationscontactsEmailContact.DataAwsccNotificationscontactsEmailContact.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccNotificationscontactsEmailContact.DataAwsccNotificationscontactsEmailContact.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNotificationscontactsEmailContact.DataAwsccNotificationscontactsEmailContact.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccNotificationscontactsEmailContact.DataAwsccNotificationscontactsEmailContact.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNotificationscontactsEmailContact.DataAwsccNotificationscontactsEmailContact.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccNotificationscontactsEmailContact.DataAwsccNotificationscontactsEmailContact.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNotificationscontactsEmailContact.DataAwsccNotificationscontactsEmailContact.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccNotificationscontactsEmailContact.DataAwsccNotificationscontactsEmailContact.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNotificationscontactsEmailContact.DataAwsccNotificationscontactsEmailContact.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccNotificationscontactsEmailContact.DataAwsccNotificationscontactsEmailContact.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNotificationscontactsEmailContact.DataAwsccNotificationscontactsEmailContact.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccNotificationscontactsEmailContact.DataAwsccNotificationscontactsEmailContact.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNotificationscontactsEmailContact.DataAwsccNotificationscontactsEmailContact.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccNotificationscontactsEmailContact.DataAwsccNotificationscontactsEmailContact.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNotificationscontactsEmailContact.DataAwsccNotificationscontactsEmailContact.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccNotificationscontactsEmailContact.DataAwsccNotificationscontactsEmailContact.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNotificationscontactsEmailContact.DataAwsccNotificationscontactsEmailContact.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNotificationscontactsEmailContact.DataAwsccNotificationscontactsEmailContact.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNotificationscontactsEmailContact.DataAwsccNotificationscontactsEmailContact.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNotificationscontactsEmailContact.DataAwsccNotificationscontactsEmailContact.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNotificationscontactsEmailContact.DataAwsccNotificationscontactsEmailContact.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccNotificationscontactsEmailContact resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccNotificationscontactsEmailContact.DataAwsccNotificationscontactsEmailContact.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_notificationscontacts_email_contact

dataAwsccNotificationscontactsEmailContact.DataAwsccNotificationscontactsEmailContact.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccNotificationscontactsEmailContact.DataAwsccNotificationscontactsEmailContact.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccNotificationscontactsEmailContact.DataAwsccNotificationscontactsEmailContact.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_notificationscontacts_email_contact

dataAwsccNotificationscontactsEmailContact.DataAwsccNotificationscontactsEmailContact.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccNotificationscontactsEmailContact.DataAwsccNotificationscontactsEmailContact.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccNotificationscontactsEmailContact.DataAwsccNotificationscontactsEmailContact.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_notificationscontacts_email_contact

dataAwsccNotificationscontactsEmailContact.DataAwsccNotificationscontactsEmailContact.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccNotificationscontactsEmailContact.DataAwsccNotificationscontactsEmailContact.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccNotificationscontactsEmailContact.DataAwsccNotificationscontactsEmailContact.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_notificationscontacts_email_contact

dataAwsccNotificationscontactsEmailContact.DataAwsccNotificationscontactsEmailContact.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccNotificationscontactsEmailContact resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccNotificationscontactsEmailContact.DataAwsccNotificationscontactsEmailContact.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccNotificationscontactsEmailContact.DataAwsccNotificationscontactsEmailContact.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccNotificationscontactsEmailContact to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccNotificationscontactsEmailContact.DataAwsccNotificationscontactsEmailContact.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccNotificationscontactsEmailContact that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/notificationscontacts_email_contact#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccNotificationscontactsEmailContact.DataAwsccNotificationscontactsEmailContact.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccNotificationscontactsEmailContact to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNotificationscontactsEmailContact.DataAwsccNotificationscontactsEmailContact.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNotificationscontactsEmailContact.DataAwsccNotificationscontactsEmailContact.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNotificationscontactsEmailContact.DataAwsccNotificationscontactsEmailContact.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNotificationscontactsEmailContact.DataAwsccNotificationscontactsEmailContact.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNotificationscontactsEmailContact.DataAwsccNotificationscontactsEmailContact.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNotificationscontactsEmailContact.DataAwsccNotificationscontactsEmailContact.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNotificationscontactsEmailContact.DataAwsccNotificationscontactsEmailContact.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNotificationscontactsEmailContact.DataAwsccNotificationscontactsEmailContact.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNotificationscontactsEmailContact.DataAwsccNotificationscontactsEmailContact.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNotificationscontactsEmailContact.DataAwsccNotificationscontactsEmailContact.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNotificationscontactsEmailContact.DataAwsccNotificationscontactsEmailContact.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNotificationscontactsEmailContact.DataAwsccNotificationscontactsEmailContact.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNotificationscontactsEmailContact.DataAwsccNotificationscontactsEmailContact.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNotificationscontactsEmailContact.DataAwsccNotificationscontactsEmailContact.property.emailAddress">email_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNotificationscontactsEmailContact.DataAwsccNotificationscontactsEmailContact.property.emailContact">email_contact</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNotificationscontactsEmailContact.DataAwsccNotificationscontactsEmailContactEmailContactOutputReference">DataAwsccNotificationscontactsEmailContactEmailContactOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNotificationscontactsEmailContact.DataAwsccNotificationscontactsEmailContact.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNotificationscontactsEmailContact.DataAwsccNotificationscontactsEmailContact.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNotificationscontactsEmailContact.DataAwsccNotificationscontactsEmailContactTagsList">DataAwsccNotificationscontactsEmailContactTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNotificationscontactsEmailContact.DataAwsccNotificationscontactsEmailContact.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNotificationscontactsEmailContact.DataAwsccNotificationscontactsEmailContact.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccNotificationscontactsEmailContact.DataAwsccNotificationscontactsEmailContact.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccNotificationscontactsEmailContact.DataAwsccNotificationscontactsEmailContact.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccNotificationscontactsEmailContact.DataAwsccNotificationscontactsEmailContact.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccNotificationscontactsEmailContact.DataAwsccNotificationscontactsEmailContact.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccNotificationscontactsEmailContact.DataAwsccNotificationscontactsEmailContact.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccNotificationscontactsEmailContact.DataAwsccNotificationscontactsEmailContact.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccNotificationscontactsEmailContact.DataAwsccNotificationscontactsEmailContact.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccNotificationscontactsEmailContact.DataAwsccNotificationscontactsEmailContact.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccNotificationscontactsEmailContact.DataAwsccNotificationscontactsEmailContact.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccNotificationscontactsEmailContact.DataAwsccNotificationscontactsEmailContact.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccNotificationscontactsEmailContact.DataAwsccNotificationscontactsEmailContact.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccNotificationscontactsEmailContact.DataAwsccNotificationscontactsEmailContact.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccNotificationscontactsEmailContact.DataAwsccNotificationscontactsEmailContact.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `email_address`<sup>Required</sup> <a name="email_address" id="@cdktn/provider-awscc.dataAwsccNotificationscontactsEmailContact.DataAwsccNotificationscontactsEmailContact.property.emailAddress"></a>

```python
email_address: str
```

- *Type:* str

---

##### `email_contact`<sup>Required</sup> <a name="email_contact" id="@cdktn/provider-awscc.dataAwsccNotificationscontactsEmailContact.DataAwsccNotificationscontactsEmailContact.property.emailContact"></a>

```python
email_contact: DataAwsccNotificationscontactsEmailContactEmailContactOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNotificationscontactsEmailContact.DataAwsccNotificationscontactsEmailContactEmailContactOutputReference">DataAwsccNotificationscontactsEmailContactEmailContactOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccNotificationscontactsEmailContact.DataAwsccNotificationscontactsEmailContact.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccNotificationscontactsEmailContact.DataAwsccNotificationscontactsEmailContact.property.tags"></a>

```python
tags: DataAwsccNotificationscontactsEmailContactTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNotificationscontactsEmailContact.DataAwsccNotificationscontactsEmailContactTagsList">DataAwsccNotificationscontactsEmailContactTagsList</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccNotificationscontactsEmailContact.DataAwsccNotificationscontactsEmailContact.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccNotificationscontactsEmailContact.DataAwsccNotificationscontactsEmailContact.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNotificationscontactsEmailContact.DataAwsccNotificationscontactsEmailContact.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccNotificationscontactsEmailContact.DataAwsccNotificationscontactsEmailContact.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccNotificationscontactsEmailContactConfig <a name="DataAwsccNotificationscontactsEmailContactConfig" id="@cdktn/provider-awscc.dataAwsccNotificationscontactsEmailContact.DataAwsccNotificationscontactsEmailContactConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccNotificationscontactsEmailContact.DataAwsccNotificationscontactsEmailContactConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_notificationscontacts_email_contact

dataAwsccNotificationscontactsEmailContact.DataAwsccNotificationscontactsEmailContactConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccNotificationscontactsEmailContact.DataAwsccNotificationscontactsEmailContactConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNotificationscontactsEmailContact.DataAwsccNotificationscontactsEmailContactConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNotificationscontactsEmailContact.DataAwsccNotificationscontactsEmailContactConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNotificationscontactsEmailContact.DataAwsccNotificationscontactsEmailContactConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNotificationscontactsEmailContact.DataAwsccNotificationscontactsEmailContactConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNotificationscontactsEmailContact.DataAwsccNotificationscontactsEmailContactConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNotificationscontactsEmailContact.DataAwsccNotificationscontactsEmailContactConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNotificationscontactsEmailContact.DataAwsccNotificationscontactsEmailContactConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccNotificationscontactsEmailContact.DataAwsccNotificationscontactsEmailContactConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccNotificationscontactsEmailContact.DataAwsccNotificationscontactsEmailContactConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccNotificationscontactsEmailContact.DataAwsccNotificationscontactsEmailContactConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccNotificationscontactsEmailContact.DataAwsccNotificationscontactsEmailContactConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccNotificationscontactsEmailContact.DataAwsccNotificationscontactsEmailContactConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccNotificationscontactsEmailContact.DataAwsccNotificationscontactsEmailContactConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccNotificationscontactsEmailContact.DataAwsccNotificationscontactsEmailContactConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccNotificationscontactsEmailContact.DataAwsccNotificationscontactsEmailContactConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/notificationscontacts_email_contact#id DataAwsccNotificationscontactsEmailContact#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccNotificationscontactsEmailContactEmailContact <a name="DataAwsccNotificationscontactsEmailContactEmailContact" id="@cdktn/provider-awscc.dataAwsccNotificationscontactsEmailContact.DataAwsccNotificationscontactsEmailContactEmailContact"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccNotificationscontactsEmailContact.DataAwsccNotificationscontactsEmailContactEmailContact.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_notificationscontacts_email_contact

dataAwsccNotificationscontactsEmailContact.DataAwsccNotificationscontactsEmailContactEmailContact()
```


### DataAwsccNotificationscontactsEmailContactTags <a name="DataAwsccNotificationscontactsEmailContactTags" id="@cdktn/provider-awscc.dataAwsccNotificationscontactsEmailContact.DataAwsccNotificationscontactsEmailContactTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccNotificationscontactsEmailContact.DataAwsccNotificationscontactsEmailContactTags.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_notificationscontacts_email_contact

dataAwsccNotificationscontactsEmailContact.DataAwsccNotificationscontactsEmailContactTags()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccNotificationscontactsEmailContactEmailContactOutputReference <a name="DataAwsccNotificationscontactsEmailContactEmailContactOutputReference" id="@cdktn/provider-awscc.dataAwsccNotificationscontactsEmailContact.DataAwsccNotificationscontactsEmailContactEmailContactOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNotificationscontactsEmailContact.DataAwsccNotificationscontactsEmailContactEmailContactOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_notificationscontacts_email_contact

dataAwsccNotificationscontactsEmailContact.DataAwsccNotificationscontactsEmailContactEmailContactOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNotificationscontactsEmailContact.DataAwsccNotificationscontactsEmailContactEmailContactOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNotificationscontactsEmailContact.DataAwsccNotificationscontactsEmailContactEmailContactOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccNotificationscontactsEmailContact.DataAwsccNotificationscontactsEmailContactEmailContactOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNotificationscontactsEmailContact.DataAwsccNotificationscontactsEmailContactEmailContactOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNotificationscontactsEmailContact.DataAwsccNotificationscontactsEmailContactEmailContactOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNotificationscontactsEmailContact.DataAwsccNotificationscontactsEmailContactEmailContactOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNotificationscontactsEmailContact.DataAwsccNotificationscontactsEmailContactEmailContactOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNotificationscontactsEmailContact.DataAwsccNotificationscontactsEmailContactEmailContactOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNotificationscontactsEmailContact.DataAwsccNotificationscontactsEmailContactEmailContactOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNotificationscontactsEmailContact.DataAwsccNotificationscontactsEmailContactEmailContactOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNotificationscontactsEmailContact.DataAwsccNotificationscontactsEmailContactEmailContactOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNotificationscontactsEmailContact.DataAwsccNotificationscontactsEmailContactEmailContactOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNotificationscontactsEmailContact.DataAwsccNotificationscontactsEmailContactEmailContactOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNotificationscontactsEmailContact.DataAwsccNotificationscontactsEmailContactEmailContactOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNotificationscontactsEmailContact.DataAwsccNotificationscontactsEmailContactEmailContactOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNotificationscontactsEmailContact.DataAwsccNotificationscontactsEmailContactEmailContactOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNotificationscontactsEmailContact.DataAwsccNotificationscontactsEmailContactEmailContactOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccNotificationscontactsEmailContact.DataAwsccNotificationscontactsEmailContactEmailContactOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccNotificationscontactsEmailContact.DataAwsccNotificationscontactsEmailContactEmailContactOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNotificationscontactsEmailContact.DataAwsccNotificationscontactsEmailContactEmailContactOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccNotificationscontactsEmailContact.DataAwsccNotificationscontactsEmailContactEmailContactOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNotificationscontactsEmailContact.DataAwsccNotificationscontactsEmailContactEmailContactOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccNotificationscontactsEmailContact.DataAwsccNotificationscontactsEmailContactEmailContactOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNotificationscontactsEmailContact.DataAwsccNotificationscontactsEmailContactEmailContactOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccNotificationscontactsEmailContact.DataAwsccNotificationscontactsEmailContactEmailContactOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNotificationscontactsEmailContact.DataAwsccNotificationscontactsEmailContactEmailContactOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccNotificationscontactsEmailContact.DataAwsccNotificationscontactsEmailContactEmailContactOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNotificationscontactsEmailContact.DataAwsccNotificationscontactsEmailContactEmailContactOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccNotificationscontactsEmailContact.DataAwsccNotificationscontactsEmailContactEmailContactOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNotificationscontactsEmailContact.DataAwsccNotificationscontactsEmailContactEmailContactOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccNotificationscontactsEmailContact.DataAwsccNotificationscontactsEmailContactEmailContactOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNotificationscontactsEmailContact.DataAwsccNotificationscontactsEmailContactEmailContactOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccNotificationscontactsEmailContact.DataAwsccNotificationscontactsEmailContactEmailContactOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNotificationscontactsEmailContact.DataAwsccNotificationscontactsEmailContactEmailContactOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccNotificationscontactsEmailContact.DataAwsccNotificationscontactsEmailContactEmailContactOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNotificationscontactsEmailContact.DataAwsccNotificationscontactsEmailContactEmailContactOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccNotificationscontactsEmailContact.DataAwsccNotificationscontactsEmailContactEmailContactOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccNotificationscontactsEmailContact.DataAwsccNotificationscontactsEmailContactEmailContactOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccNotificationscontactsEmailContact.DataAwsccNotificationscontactsEmailContactEmailContactOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccNotificationscontactsEmailContact.DataAwsccNotificationscontactsEmailContactEmailContactOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccNotificationscontactsEmailContact.DataAwsccNotificationscontactsEmailContactEmailContactOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNotificationscontactsEmailContact.DataAwsccNotificationscontactsEmailContactEmailContactOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNotificationscontactsEmailContact.DataAwsccNotificationscontactsEmailContactEmailContactOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNotificationscontactsEmailContact.DataAwsccNotificationscontactsEmailContactEmailContactOutputReference.property.address">address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNotificationscontactsEmailContact.DataAwsccNotificationscontactsEmailContactEmailContactOutputReference.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNotificationscontactsEmailContact.DataAwsccNotificationscontactsEmailContactEmailContactOutputReference.property.creationTime">creation_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNotificationscontactsEmailContact.DataAwsccNotificationscontactsEmailContactEmailContactOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNotificationscontactsEmailContact.DataAwsccNotificationscontactsEmailContactEmailContactOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNotificationscontactsEmailContact.DataAwsccNotificationscontactsEmailContactEmailContactOutputReference.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNotificationscontactsEmailContact.DataAwsccNotificationscontactsEmailContactEmailContactOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNotificationscontactsEmailContact.DataAwsccNotificationscontactsEmailContactEmailContact">DataAwsccNotificationscontactsEmailContactEmailContact</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccNotificationscontactsEmailContact.DataAwsccNotificationscontactsEmailContactEmailContactOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccNotificationscontactsEmailContact.DataAwsccNotificationscontactsEmailContactEmailContactOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktn/provider-awscc.dataAwsccNotificationscontactsEmailContact.DataAwsccNotificationscontactsEmailContactEmailContactOutputReference.property.address"></a>

```python
address: str
```

- *Type:* str

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccNotificationscontactsEmailContact.DataAwsccNotificationscontactsEmailContactEmailContactOutputReference.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `creation_time`<sup>Required</sup> <a name="creation_time" id="@cdktn/provider-awscc.dataAwsccNotificationscontactsEmailContact.DataAwsccNotificationscontactsEmailContactEmailContactOutputReference.property.creationTime"></a>

```python
creation_time: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccNotificationscontactsEmailContact.DataAwsccNotificationscontactsEmailContactEmailContactOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.dataAwsccNotificationscontactsEmailContact.DataAwsccNotificationscontactsEmailContactEmailContactOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktn/provider-awscc.dataAwsccNotificationscontactsEmailContact.DataAwsccNotificationscontactsEmailContactEmailContactOutputReference.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccNotificationscontactsEmailContact.DataAwsccNotificationscontactsEmailContactEmailContactOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccNotificationscontactsEmailContactEmailContact
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNotificationscontactsEmailContact.DataAwsccNotificationscontactsEmailContactEmailContact">DataAwsccNotificationscontactsEmailContactEmailContact</a>

---


### DataAwsccNotificationscontactsEmailContactTagsList <a name="DataAwsccNotificationscontactsEmailContactTagsList" id="@cdktn/provider-awscc.dataAwsccNotificationscontactsEmailContact.DataAwsccNotificationscontactsEmailContactTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNotificationscontactsEmailContact.DataAwsccNotificationscontactsEmailContactTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_notificationscontacts_email_contact

dataAwsccNotificationscontactsEmailContact.DataAwsccNotificationscontactsEmailContactTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNotificationscontactsEmailContact.DataAwsccNotificationscontactsEmailContactTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNotificationscontactsEmailContact.DataAwsccNotificationscontactsEmailContactTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNotificationscontactsEmailContact.DataAwsccNotificationscontactsEmailContactTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccNotificationscontactsEmailContact.DataAwsccNotificationscontactsEmailContactTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNotificationscontactsEmailContact.DataAwsccNotificationscontactsEmailContactTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccNotificationscontactsEmailContact.DataAwsccNotificationscontactsEmailContactTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNotificationscontactsEmailContact.DataAwsccNotificationscontactsEmailContactTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNotificationscontactsEmailContact.DataAwsccNotificationscontactsEmailContactTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNotificationscontactsEmailContact.DataAwsccNotificationscontactsEmailContactTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNotificationscontactsEmailContact.DataAwsccNotificationscontactsEmailContactTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNotificationscontactsEmailContact.DataAwsccNotificationscontactsEmailContactTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccNotificationscontactsEmailContact.DataAwsccNotificationscontactsEmailContactTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccNotificationscontactsEmailContact.DataAwsccNotificationscontactsEmailContactTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccNotificationscontactsEmailContact.DataAwsccNotificationscontactsEmailContactTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccNotificationscontactsEmailContact.DataAwsccNotificationscontactsEmailContactTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccNotificationscontactsEmailContact.DataAwsccNotificationscontactsEmailContactTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccNotificationscontactsEmailContact.DataAwsccNotificationscontactsEmailContactTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccNotificationscontactsEmailContact.DataAwsccNotificationscontactsEmailContactTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccNotificationscontactsEmailContactTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccNotificationscontactsEmailContact.DataAwsccNotificationscontactsEmailContactTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNotificationscontactsEmailContact.DataAwsccNotificationscontactsEmailContactTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNotificationscontactsEmailContact.DataAwsccNotificationscontactsEmailContactTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccNotificationscontactsEmailContact.DataAwsccNotificationscontactsEmailContactTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccNotificationscontactsEmailContact.DataAwsccNotificationscontactsEmailContactTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccNotificationscontactsEmailContactTagsOutputReference <a name="DataAwsccNotificationscontactsEmailContactTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccNotificationscontactsEmailContact.DataAwsccNotificationscontactsEmailContactTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNotificationscontactsEmailContact.DataAwsccNotificationscontactsEmailContactTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_notificationscontacts_email_contact

dataAwsccNotificationscontactsEmailContact.DataAwsccNotificationscontactsEmailContactTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNotificationscontactsEmailContact.DataAwsccNotificationscontactsEmailContactTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNotificationscontactsEmailContact.DataAwsccNotificationscontactsEmailContactTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNotificationscontactsEmailContact.DataAwsccNotificationscontactsEmailContactTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNotificationscontactsEmailContact.DataAwsccNotificationscontactsEmailContactTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccNotificationscontactsEmailContact.DataAwsccNotificationscontactsEmailContactTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNotificationscontactsEmailContact.DataAwsccNotificationscontactsEmailContactTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccNotificationscontactsEmailContact.DataAwsccNotificationscontactsEmailContactTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccNotificationscontactsEmailContact.DataAwsccNotificationscontactsEmailContactTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNotificationscontactsEmailContact.DataAwsccNotificationscontactsEmailContactTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNotificationscontactsEmailContact.DataAwsccNotificationscontactsEmailContactTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNotificationscontactsEmailContact.DataAwsccNotificationscontactsEmailContactTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNotificationscontactsEmailContact.DataAwsccNotificationscontactsEmailContactTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNotificationscontactsEmailContact.DataAwsccNotificationscontactsEmailContactTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNotificationscontactsEmailContact.DataAwsccNotificationscontactsEmailContactTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNotificationscontactsEmailContact.DataAwsccNotificationscontactsEmailContactTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNotificationscontactsEmailContact.DataAwsccNotificationscontactsEmailContactTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNotificationscontactsEmailContact.DataAwsccNotificationscontactsEmailContactTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNotificationscontactsEmailContact.DataAwsccNotificationscontactsEmailContactTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNotificationscontactsEmailContact.DataAwsccNotificationscontactsEmailContactTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNotificationscontactsEmailContact.DataAwsccNotificationscontactsEmailContactTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNotificationscontactsEmailContact.DataAwsccNotificationscontactsEmailContactTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccNotificationscontactsEmailContact.DataAwsccNotificationscontactsEmailContactTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccNotificationscontactsEmailContact.DataAwsccNotificationscontactsEmailContactTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNotificationscontactsEmailContact.DataAwsccNotificationscontactsEmailContactTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccNotificationscontactsEmailContact.DataAwsccNotificationscontactsEmailContactTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNotificationscontactsEmailContact.DataAwsccNotificationscontactsEmailContactTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccNotificationscontactsEmailContact.DataAwsccNotificationscontactsEmailContactTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNotificationscontactsEmailContact.DataAwsccNotificationscontactsEmailContactTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccNotificationscontactsEmailContact.DataAwsccNotificationscontactsEmailContactTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNotificationscontactsEmailContact.DataAwsccNotificationscontactsEmailContactTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccNotificationscontactsEmailContact.DataAwsccNotificationscontactsEmailContactTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNotificationscontactsEmailContact.DataAwsccNotificationscontactsEmailContactTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccNotificationscontactsEmailContact.DataAwsccNotificationscontactsEmailContactTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNotificationscontactsEmailContact.DataAwsccNotificationscontactsEmailContactTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccNotificationscontactsEmailContact.DataAwsccNotificationscontactsEmailContactTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNotificationscontactsEmailContact.DataAwsccNotificationscontactsEmailContactTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccNotificationscontactsEmailContact.DataAwsccNotificationscontactsEmailContactTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNotificationscontactsEmailContact.DataAwsccNotificationscontactsEmailContactTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccNotificationscontactsEmailContact.DataAwsccNotificationscontactsEmailContactTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNotificationscontactsEmailContact.DataAwsccNotificationscontactsEmailContactTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccNotificationscontactsEmailContact.DataAwsccNotificationscontactsEmailContactTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccNotificationscontactsEmailContact.DataAwsccNotificationscontactsEmailContactTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccNotificationscontactsEmailContact.DataAwsccNotificationscontactsEmailContactTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccNotificationscontactsEmailContact.DataAwsccNotificationscontactsEmailContactTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccNotificationscontactsEmailContact.DataAwsccNotificationscontactsEmailContactTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNotificationscontactsEmailContact.DataAwsccNotificationscontactsEmailContactTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNotificationscontactsEmailContact.DataAwsccNotificationscontactsEmailContactTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNotificationscontactsEmailContact.DataAwsccNotificationscontactsEmailContactTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNotificationscontactsEmailContact.DataAwsccNotificationscontactsEmailContactTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNotificationscontactsEmailContact.DataAwsccNotificationscontactsEmailContactTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNotificationscontactsEmailContact.DataAwsccNotificationscontactsEmailContactTags">DataAwsccNotificationscontactsEmailContactTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccNotificationscontactsEmailContact.DataAwsccNotificationscontactsEmailContactTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccNotificationscontactsEmailContact.DataAwsccNotificationscontactsEmailContactTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccNotificationscontactsEmailContact.DataAwsccNotificationscontactsEmailContactTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccNotificationscontactsEmailContact.DataAwsccNotificationscontactsEmailContactTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccNotificationscontactsEmailContact.DataAwsccNotificationscontactsEmailContactTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccNotificationscontactsEmailContactTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNotificationscontactsEmailContact.DataAwsccNotificationscontactsEmailContactTags">DataAwsccNotificationscontactsEmailContactTags</a>

---



