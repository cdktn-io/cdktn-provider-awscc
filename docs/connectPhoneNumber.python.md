# `connectPhoneNumber` Submodule <a name="`connectPhoneNumber` Submodule" id="@cdktn/provider-awscc.connectPhoneNumber"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ConnectPhoneNumber <a name="ConnectPhoneNumber" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_phone_number awscc_connect_phone_number}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.Initializer"></a>

```python
from cdktn_provider_awscc import connect_phone_number

connectPhoneNumber.ConnectPhoneNumber(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  target_arn: str,
  country_code: str = None,
  description: str = None,
  prefix: str = None,
  source_phone_number_arn: str = None,
  tags: IResolvable | typing.List[ConnectPhoneNumberTags] = None,
  type: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.Initializer.parameter.targetArn">target_arn</a></code> | <code>str</code> | The ARN of the target the phone number is claimed to. |
| <code><a href="#@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.Initializer.parameter.countryCode">country_code</a></code> | <code>str</code> | The phone number country code. |
| <code><a href="#@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.Initializer.parameter.description">description</a></code> | <code>str</code> | The description of the phone number. |
| <code><a href="#@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.Initializer.parameter.prefix">prefix</a></code> | <code>str</code> | The phone number prefix. |
| <code><a href="#@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.Initializer.parameter.sourcePhoneNumberArn">source_phone_number_arn</a></code> | <code>str</code> | The source phone number arn. |
| <code><a href="#@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumberTags">ConnectPhoneNumberTags</a>]</code> | One or more tags. |
| <code><a href="#@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.Initializer.parameter.type">type</a></code> | <code>str</code> | The phone number type. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `target_arn`<sup>Required</sup> <a name="target_arn" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.Initializer.parameter.targetArn"></a>

- *Type:* str

The ARN of the target the phone number is claimed to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_phone_number#target_arn ConnectPhoneNumber#target_arn}

---

##### `country_code`<sup>Optional</sup> <a name="country_code" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.Initializer.parameter.countryCode"></a>

- *Type:* str

The phone number country code.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_phone_number#country_code ConnectPhoneNumber#country_code}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.Initializer.parameter.description"></a>

- *Type:* str

The description of the phone number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_phone_number#description ConnectPhoneNumber#description}

---

##### `prefix`<sup>Optional</sup> <a name="prefix" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.Initializer.parameter.prefix"></a>

- *Type:* str

The phone number prefix.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_phone_number#prefix ConnectPhoneNumber#prefix}

---

##### `source_phone_number_arn`<sup>Optional</sup> <a name="source_phone_number_arn" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.Initializer.parameter.sourcePhoneNumberArn"></a>

- *Type:* str

The source phone number arn.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_phone_number#source_phone_number_arn ConnectPhoneNumber#source_phone_number_arn}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumberTags">ConnectPhoneNumberTags</a>]

One or more tags.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_phone_number#tags ConnectPhoneNumber#tags}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.Initializer.parameter.type"></a>

- *Type:* str

The phone number type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_phone_number#type ConnectPhoneNumber#type}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.resetCountryCode">reset_country_code</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.resetPrefix">reset_prefix</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.resetSourcePhoneNumberArn">reset_source_phone_number_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.resetType">reset_type</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[ConnectPhoneNumberTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumberTags">ConnectPhoneNumberTags</a>]

---

##### `reset_country_code` <a name="reset_country_code" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.resetCountryCode"></a>

```python
def reset_country_code() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_prefix` <a name="reset_prefix" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.resetPrefix"></a>

```python
def reset_prefix() -> None
```

##### `reset_source_phone_number_arn` <a name="reset_source_phone_number_arn" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.resetSourcePhoneNumberArn"></a>

```python
def reset_source_phone_number_arn() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.resetType"></a>

```python
def reset_type() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a ConnectPhoneNumber resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.isConstruct"></a>

```python
from cdktn_provider_awscc import connect_phone_number

connectPhoneNumber.ConnectPhoneNumber.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.isTerraformElement"></a>

```python
from cdktn_provider_awscc import connect_phone_number

connectPhoneNumber.ConnectPhoneNumber.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.isTerraformResource"></a>

```python
from cdktn_provider_awscc import connect_phone_number

connectPhoneNumber.ConnectPhoneNumber.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import connect_phone_number

connectPhoneNumber.ConnectPhoneNumber.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a ConnectPhoneNumber resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ConnectPhoneNumber to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ConnectPhoneNumber that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_phone_number#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ConnectPhoneNumber to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.property.address">address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.property.phoneNumberArn">phone_number_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumberTagsList">ConnectPhoneNumberTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.property.countryCodeInput">country_code_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.property.prefixInput">prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.property.sourcePhoneNumberArnInput">source_phone_number_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumberTags">ConnectPhoneNumberTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.property.targetArnInput">target_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.property.countryCode">country_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.property.prefix">prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.property.sourcePhoneNumberArn">source_phone_number_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.property.targetArn">target_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.property.type">type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.property.address"></a>

```python
address: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `phone_number_arn`<sup>Required</sup> <a name="phone_number_arn" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.property.phoneNumberArn"></a>

```python
phone_number_arn: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.property.tags"></a>

```python
tags: ConnectPhoneNumberTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumberTagsList">ConnectPhoneNumberTagsList</a>

---

##### `country_code_input`<sup>Optional</sup> <a name="country_code_input" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.property.countryCodeInput"></a>

```python
country_code_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `prefix_input`<sup>Optional</sup> <a name="prefix_input" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.property.prefixInput"></a>

```python
prefix_input: str
```

- *Type:* str

---

##### `source_phone_number_arn_input`<sup>Optional</sup> <a name="source_phone_number_arn_input" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.property.sourcePhoneNumberArnInput"></a>

```python
source_phone_number_arn_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[ConnectPhoneNumberTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumberTags">ConnectPhoneNumberTags</a>]

---

##### `target_arn_input`<sup>Optional</sup> <a name="target_arn_input" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.property.targetArnInput"></a>

```python
target_arn_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `country_code`<sup>Required</sup> <a name="country_code" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.property.countryCode"></a>

```python
country_code: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.property.prefix"></a>

```python
prefix: str
```

- *Type:* str

---

##### `source_phone_number_arn`<sup>Required</sup> <a name="source_phone_number_arn" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.property.sourcePhoneNumberArn"></a>

```python
source_phone_number_arn: str
```

- *Type:* str

---

##### `target_arn`<sup>Required</sup> <a name="target_arn" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.property.targetArn"></a>

```python
target_arn: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.property.type"></a>

```python
type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ConnectPhoneNumberConfig <a name="ConnectPhoneNumberConfig" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumberConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumberConfig.Initializer"></a>

```python
from cdktn_provider_awscc import connect_phone_number

connectPhoneNumber.ConnectPhoneNumberConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  target_arn: str,
  country_code: str = None,
  description: str = None,
  prefix: str = None,
  source_phone_number_arn: str = None,
  tags: IResolvable | typing.List[ConnectPhoneNumberTags] = None,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumberConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumberConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumberConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumberConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumberConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumberConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumberConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumberConfig.property.targetArn">target_arn</a></code> | <code>str</code> | The ARN of the target the phone number is claimed to. |
| <code><a href="#@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumberConfig.property.countryCode">country_code</a></code> | <code>str</code> | The phone number country code. |
| <code><a href="#@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumberConfig.property.description">description</a></code> | <code>str</code> | The description of the phone number. |
| <code><a href="#@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumberConfig.property.prefix">prefix</a></code> | <code>str</code> | The phone number prefix. |
| <code><a href="#@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumberConfig.property.sourcePhoneNumberArn">source_phone_number_arn</a></code> | <code>str</code> | The source phone number arn. |
| <code><a href="#@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumberConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumberTags">ConnectPhoneNumberTags</a>]</code> | One or more tags. |
| <code><a href="#@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumberConfig.property.type">type</a></code> | <code>str</code> | The phone number type. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumberConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumberConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumberConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumberConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumberConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumberConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumberConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `target_arn`<sup>Required</sup> <a name="target_arn" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumberConfig.property.targetArn"></a>

```python
target_arn: str
```

- *Type:* str

The ARN of the target the phone number is claimed to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_phone_number#target_arn ConnectPhoneNumber#target_arn}

---

##### `country_code`<sup>Optional</sup> <a name="country_code" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumberConfig.property.countryCode"></a>

```python
country_code: str
```

- *Type:* str

The phone number country code.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_phone_number#country_code ConnectPhoneNumber#country_code}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumberConfig.property.description"></a>

```python
description: str
```

- *Type:* str

The description of the phone number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_phone_number#description ConnectPhoneNumber#description}

---

##### `prefix`<sup>Optional</sup> <a name="prefix" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumberConfig.property.prefix"></a>

```python
prefix: str
```

- *Type:* str

The phone number prefix.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_phone_number#prefix ConnectPhoneNumber#prefix}

---

##### `source_phone_number_arn`<sup>Optional</sup> <a name="source_phone_number_arn" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumberConfig.property.sourcePhoneNumberArn"></a>

```python
source_phone_number_arn: str
```

- *Type:* str

The source phone number arn.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_phone_number#source_phone_number_arn ConnectPhoneNumber#source_phone_number_arn}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumberConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[ConnectPhoneNumberTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumberTags">ConnectPhoneNumberTags</a>]

One or more tags.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_phone_number#tags ConnectPhoneNumber#tags}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumberConfig.property.type"></a>

```python
type: str
```

- *Type:* str

The phone number type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_phone_number#type ConnectPhoneNumber#type}

---

### ConnectPhoneNumberTags <a name="ConnectPhoneNumberTags" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumberTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumberTags.Initializer"></a>

```python
from cdktn_provider_awscc import connect_phone_number

connectPhoneNumber.ConnectPhoneNumberTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumberTags.property.key">key</a></code> | <code>str</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumberTags.property.value">value</a></code> | <code>str</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumberTags.property.key"></a>

```python
key: str
```

- *Type:* str

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_phone_number#key ConnectPhoneNumber#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumberTags.property.value"></a>

```python
value: str
```

- *Type:* str

The value for the tag.

You can specify a value that is 1 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_phone_number#value ConnectPhoneNumber#value}

---

## Classes <a name="Classes" id="Classes"></a>

### ConnectPhoneNumberTagsList <a name="ConnectPhoneNumberTagsList" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumberTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumberTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import connect_phone_number

connectPhoneNumber.ConnectPhoneNumberTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumberTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumberTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumberTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumberTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumberTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumberTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumberTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumberTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumberTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumberTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumberTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumberTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumberTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumberTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumberTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumberTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumberTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumberTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ConnectPhoneNumberTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumberTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumberTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumberTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumberTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumberTags">ConnectPhoneNumberTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumberTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumberTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumberTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[ConnectPhoneNumberTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumberTags">ConnectPhoneNumberTags</a>]

---


### ConnectPhoneNumberTagsOutputReference <a name="ConnectPhoneNumberTagsOutputReference" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumberTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumberTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import connect_phone_number

connectPhoneNumber.ConnectPhoneNumberTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumberTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumberTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumberTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumberTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumberTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumberTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumberTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumberTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumberTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumberTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumberTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumberTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumberTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumberTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumberTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumberTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumberTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumberTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumberTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumberTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumberTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumberTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumberTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumberTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumberTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumberTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumberTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumberTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumberTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumberTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumberTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumberTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumberTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumberTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumberTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumberTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumberTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumberTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumberTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumberTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumberTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumberTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumberTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumberTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumberTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumberTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumberTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumberTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumberTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumberTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumberTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumberTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumberTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumberTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumberTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumberTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumberTags">ConnectPhoneNumberTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumberTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumberTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumberTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumberTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumberTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumberTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumberTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ConnectPhoneNumberTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumberTags">ConnectPhoneNumberTags</a>

---



