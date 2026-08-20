# `iotwirelessPartnerAccount` Submodule <a name="`iotwirelessPartnerAccount` Submodule" id="@cdktn/provider-awscc.iotwirelessPartnerAccount"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IotwirelessPartnerAccount <a name="IotwirelessPartnerAccount" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_partner_account awscc_iotwireless_partner_account}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.Initializer"></a>

```python
from cdktn_provider_awscc import iotwireless_partner_account

iotwirelessPartnerAccount.IotwirelessPartnerAccount(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  account_linked: bool | IResolvable = None,
  partner_account_id: str = None,
  partner_type: str = None,
  sidewalk: IotwirelessPartnerAccountSidewalk = None,
  sidewalk_response: IotwirelessPartnerAccountSidewalkResponse = None,
  sidewalk_update: IotwirelessPartnerAccountSidewalkUpdate = None,
  tags: IResolvable | typing.List[IotwirelessPartnerAccountTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.Initializer.parameter.accountLinked">account_linked</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether the partner account is linked to the AWS account. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.Initializer.parameter.partnerAccountId">partner_account_id</a></code> | <code>str</code> | The partner account ID to disassociate from the AWS account. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.Initializer.parameter.partnerType">partner_type</a></code> | <code>str</code> | The partner type. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.Initializer.parameter.sidewalk">sidewalk</a></code> | <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalk">IotwirelessPartnerAccountSidewalk</a></code> | The Sidewalk account credentials. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.Initializer.parameter.sidewalkResponse">sidewalk_response</a></code> | <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponse">IotwirelessPartnerAccountSidewalkResponse</a></code> | The Sidewalk account credentials. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.Initializer.parameter.sidewalkUpdate">sidewalk_update</a></code> | <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdate">IotwirelessPartnerAccountSidewalkUpdate</a></code> | The Sidewalk account credentials. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTags">IotwirelessPartnerAccountTags</a>]</code> | A list of key-value pairs that contain metadata for the destination. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `account_linked`<sup>Optional</sup> <a name="account_linked" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.Initializer.parameter.accountLinked"></a>

- *Type:* bool | cdktn.IResolvable

Whether the partner account is linked to the AWS account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_partner_account#account_linked IotwirelessPartnerAccount#account_linked}

---

##### `partner_account_id`<sup>Optional</sup> <a name="partner_account_id" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.Initializer.parameter.partnerAccountId"></a>

- *Type:* str

The partner account ID to disassociate from the AWS account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_partner_account#partner_account_id IotwirelessPartnerAccount#partner_account_id}

---

##### `partner_type`<sup>Optional</sup> <a name="partner_type" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.Initializer.parameter.partnerType"></a>

- *Type:* str

The partner type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_partner_account#partner_type IotwirelessPartnerAccount#partner_type}

---

##### `sidewalk`<sup>Optional</sup> <a name="sidewalk" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.Initializer.parameter.sidewalk"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalk">IotwirelessPartnerAccountSidewalk</a>

The Sidewalk account credentials.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_partner_account#sidewalk IotwirelessPartnerAccount#sidewalk}

---

##### `sidewalk_response`<sup>Optional</sup> <a name="sidewalk_response" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.Initializer.parameter.sidewalkResponse"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponse">IotwirelessPartnerAccountSidewalkResponse</a>

The Sidewalk account credentials.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_partner_account#sidewalk_response IotwirelessPartnerAccount#sidewalk_response}

---

##### `sidewalk_update`<sup>Optional</sup> <a name="sidewalk_update" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.Initializer.parameter.sidewalkUpdate"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdate">IotwirelessPartnerAccountSidewalkUpdate</a>

The Sidewalk account credentials.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_partner_account#sidewalk_update IotwirelessPartnerAccount#sidewalk_update}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTags">IotwirelessPartnerAccountTags</a>]

A list of key-value pairs that contain metadata for the destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_partner_account#tags IotwirelessPartnerAccount#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.putSidewalk">put_sidewalk</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.putSidewalkResponse">put_sidewalk_response</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.putSidewalkUpdate">put_sidewalk_update</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.resetAccountLinked">reset_account_linked</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.resetPartnerAccountId">reset_partner_account_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.resetPartnerType">reset_partner_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.resetSidewalk">reset_sidewalk</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.resetSidewalkResponse">reset_sidewalk_response</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.resetSidewalkUpdate">reset_sidewalk_update</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_sidewalk` <a name="put_sidewalk" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.putSidewalk"></a>

```python
def put_sidewalk(
  app_server_private_key: str = None
) -> None
```

###### `app_server_private_key`<sup>Optional</sup> <a name="app_server_private_key" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.putSidewalk.parameter.appServerPrivateKey"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_partner_account#app_server_private_key IotwirelessPartnerAccount#app_server_private_key}.

---

##### `put_sidewalk_response` <a name="put_sidewalk_response" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.putSidewalkResponse"></a>

```python
def put_sidewalk_response(
  amazon_id: str = None,
  arn: str = None,
  fingerprint: str = None
) -> None
```

###### `amazon_id`<sup>Optional</sup> <a name="amazon_id" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.putSidewalkResponse.parameter.amazonId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_partner_account#amazon_id IotwirelessPartnerAccount#amazon_id}.

---

###### `arn`<sup>Optional</sup> <a name="arn" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.putSidewalkResponse.parameter.arn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_partner_account#arn IotwirelessPartnerAccount#arn}.

---

###### `fingerprint`<sup>Optional</sup> <a name="fingerprint" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.putSidewalkResponse.parameter.fingerprint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_partner_account#fingerprint IotwirelessPartnerAccount#fingerprint}.

---

##### `put_sidewalk_update` <a name="put_sidewalk_update" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.putSidewalkUpdate"></a>

```python
def put_sidewalk_update(
  app_server_private_key: str = None
) -> None
```

###### `app_server_private_key`<sup>Optional</sup> <a name="app_server_private_key" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.putSidewalkUpdate.parameter.appServerPrivateKey"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_partner_account#app_server_private_key IotwirelessPartnerAccount#app_server_private_key}.

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[IotwirelessPartnerAccountTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTags">IotwirelessPartnerAccountTags</a>]

---

##### `reset_account_linked` <a name="reset_account_linked" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.resetAccountLinked"></a>

```python
def reset_account_linked() -> None
```

##### `reset_partner_account_id` <a name="reset_partner_account_id" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.resetPartnerAccountId"></a>

```python
def reset_partner_account_id() -> None
```

##### `reset_partner_type` <a name="reset_partner_type" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.resetPartnerType"></a>

```python
def reset_partner_type() -> None
```

##### `reset_sidewalk` <a name="reset_sidewalk" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.resetSidewalk"></a>

```python
def reset_sidewalk() -> None
```

##### `reset_sidewalk_response` <a name="reset_sidewalk_response" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.resetSidewalkResponse"></a>

```python
def reset_sidewalk_response() -> None
```

##### `reset_sidewalk_update` <a name="reset_sidewalk_update" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.resetSidewalkUpdate"></a>

```python
def reset_sidewalk_update() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a IotwirelessPartnerAccount resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.isConstruct"></a>

```python
from cdktn_provider_awscc import iotwireless_partner_account

iotwirelessPartnerAccount.IotwirelessPartnerAccount.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.isTerraformElement"></a>

```python
from cdktn_provider_awscc import iotwireless_partner_account

iotwirelessPartnerAccount.IotwirelessPartnerAccount.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.isTerraformResource"></a>

```python
from cdktn_provider_awscc import iotwireless_partner_account

iotwirelessPartnerAccount.IotwirelessPartnerAccount.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import iotwireless_partner_account

iotwirelessPartnerAccount.IotwirelessPartnerAccount.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a IotwirelessPartnerAccount resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the IotwirelessPartnerAccount to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing IotwirelessPartnerAccount that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_partner_account#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the IotwirelessPartnerAccount to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.property.fingerprint">fingerprint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.property.sidewalk">sidewalk</a></code> | <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkOutputReference">IotwirelessPartnerAccountSidewalkOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.property.sidewalkResponse">sidewalk_response</a></code> | <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference">IotwirelessPartnerAccountSidewalkResponseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.property.sidewalkUpdate">sidewalk_update</a></code> | <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdateOutputReference">IotwirelessPartnerAccountSidewalkUpdateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsList">IotwirelessPartnerAccountTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.property.accountLinkedInput">account_linked_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.property.partnerAccountIdInput">partner_account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.property.partnerTypeInput">partner_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.property.sidewalkInput">sidewalk_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalk">IotwirelessPartnerAccountSidewalk</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.property.sidewalkResponseInput">sidewalk_response_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponse">IotwirelessPartnerAccountSidewalkResponse</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.property.sidewalkUpdateInput">sidewalk_update_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdate">IotwirelessPartnerAccountSidewalkUpdate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTags">IotwirelessPartnerAccountTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.property.accountLinked">account_linked</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.property.partnerAccountId">partner_account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.property.partnerType">partner_type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `fingerprint`<sup>Required</sup> <a name="fingerprint" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.property.fingerprint"></a>

```python
fingerprint: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `sidewalk`<sup>Required</sup> <a name="sidewalk" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.property.sidewalk"></a>

```python
sidewalk: IotwirelessPartnerAccountSidewalkOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkOutputReference">IotwirelessPartnerAccountSidewalkOutputReference</a>

---

##### `sidewalk_response`<sup>Required</sup> <a name="sidewalk_response" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.property.sidewalkResponse"></a>

```python
sidewalk_response: IotwirelessPartnerAccountSidewalkResponseOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference">IotwirelessPartnerAccountSidewalkResponseOutputReference</a>

---

##### `sidewalk_update`<sup>Required</sup> <a name="sidewalk_update" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.property.sidewalkUpdate"></a>

```python
sidewalk_update: IotwirelessPartnerAccountSidewalkUpdateOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdateOutputReference">IotwirelessPartnerAccountSidewalkUpdateOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.property.tags"></a>

```python
tags: IotwirelessPartnerAccountTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsList">IotwirelessPartnerAccountTagsList</a>

---

##### `account_linked_input`<sup>Optional</sup> <a name="account_linked_input" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.property.accountLinkedInput"></a>

```python
account_linked_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `partner_account_id_input`<sup>Optional</sup> <a name="partner_account_id_input" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.property.partnerAccountIdInput"></a>

```python
partner_account_id_input: str
```

- *Type:* str

---

##### `partner_type_input`<sup>Optional</sup> <a name="partner_type_input" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.property.partnerTypeInput"></a>

```python
partner_type_input: str
```

- *Type:* str

---

##### `sidewalk_input`<sup>Optional</sup> <a name="sidewalk_input" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.property.sidewalkInput"></a>

```python
sidewalk_input: IResolvable | IotwirelessPartnerAccountSidewalk
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalk">IotwirelessPartnerAccountSidewalk</a>

---

##### `sidewalk_response_input`<sup>Optional</sup> <a name="sidewalk_response_input" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.property.sidewalkResponseInput"></a>

```python
sidewalk_response_input: IResolvable | IotwirelessPartnerAccountSidewalkResponse
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponse">IotwirelessPartnerAccountSidewalkResponse</a>

---

##### `sidewalk_update_input`<sup>Optional</sup> <a name="sidewalk_update_input" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.property.sidewalkUpdateInput"></a>

```python
sidewalk_update_input: IResolvable | IotwirelessPartnerAccountSidewalkUpdate
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdate">IotwirelessPartnerAccountSidewalkUpdate</a>

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[IotwirelessPartnerAccountTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTags">IotwirelessPartnerAccountTags</a>]

---

##### `account_linked`<sup>Required</sup> <a name="account_linked" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.property.accountLinked"></a>

```python
account_linked: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `partner_account_id`<sup>Required</sup> <a name="partner_account_id" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.property.partnerAccountId"></a>

```python
partner_account_id: str
```

- *Type:* str

---

##### `partner_type`<sup>Required</sup> <a name="partner_type" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.property.partnerType"></a>

```python
partner_type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### IotwirelessPartnerAccountConfig <a name="IotwirelessPartnerAccountConfig" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountConfig.Initializer"></a>

```python
from cdktn_provider_awscc import iotwireless_partner_account

iotwirelessPartnerAccount.IotwirelessPartnerAccountConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  account_linked: bool | IResolvable = None,
  partner_account_id: str = None,
  partner_type: str = None,
  sidewalk: IotwirelessPartnerAccountSidewalk = None,
  sidewalk_response: IotwirelessPartnerAccountSidewalkResponse = None,
  sidewalk_update: IotwirelessPartnerAccountSidewalkUpdate = None,
  tags: IResolvable | typing.List[IotwirelessPartnerAccountTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountConfig.property.accountLinked">account_linked</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether the partner account is linked to the AWS account. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountConfig.property.partnerAccountId">partner_account_id</a></code> | <code>str</code> | The partner account ID to disassociate from the AWS account. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountConfig.property.partnerType">partner_type</a></code> | <code>str</code> | The partner type. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountConfig.property.sidewalk">sidewalk</a></code> | <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalk">IotwirelessPartnerAccountSidewalk</a></code> | The Sidewalk account credentials. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountConfig.property.sidewalkResponse">sidewalk_response</a></code> | <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponse">IotwirelessPartnerAccountSidewalkResponse</a></code> | The Sidewalk account credentials. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountConfig.property.sidewalkUpdate">sidewalk_update</a></code> | <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdate">IotwirelessPartnerAccountSidewalkUpdate</a></code> | The Sidewalk account credentials. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTags">IotwirelessPartnerAccountTags</a>]</code> | A list of key-value pairs that contain metadata for the destination. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `account_linked`<sup>Optional</sup> <a name="account_linked" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountConfig.property.accountLinked"></a>

```python
account_linked: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether the partner account is linked to the AWS account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_partner_account#account_linked IotwirelessPartnerAccount#account_linked}

---

##### `partner_account_id`<sup>Optional</sup> <a name="partner_account_id" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountConfig.property.partnerAccountId"></a>

```python
partner_account_id: str
```

- *Type:* str

The partner account ID to disassociate from the AWS account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_partner_account#partner_account_id IotwirelessPartnerAccount#partner_account_id}

---

##### `partner_type`<sup>Optional</sup> <a name="partner_type" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountConfig.property.partnerType"></a>

```python
partner_type: str
```

- *Type:* str

The partner type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_partner_account#partner_type IotwirelessPartnerAccount#partner_type}

---

##### `sidewalk`<sup>Optional</sup> <a name="sidewalk" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountConfig.property.sidewalk"></a>

```python
sidewalk: IotwirelessPartnerAccountSidewalk
```

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalk">IotwirelessPartnerAccountSidewalk</a>

The Sidewalk account credentials.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_partner_account#sidewalk IotwirelessPartnerAccount#sidewalk}

---

##### `sidewalk_response`<sup>Optional</sup> <a name="sidewalk_response" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountConfig.property.sidewalkResponse"></a>

```python
sidewalk_response: IotwirelessPartnerAccountSidewalkResponse
```

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponse">IotwirelessPartnerAccountSidewalkResponse</a>

The Sidewalk account credentials.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_partner_account#sidewalk_response IotwirelessPartnerAccount#sidewalk_response}

---

##### `sidewalk_update`<sup>Optional</sup> <a name="sidewalk_update" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountConfig.property.sidewalkUpdate"></a>

```python
sidewalk_update: IotwirelessPartnerAccountSidewalkUpdate
```

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdate">IotwirelessPartnerAccountSidewalkUpdate</a>

The Sidewalk account credentials.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_partner_account#sidewalk_update IotwirelessPartnerAccount#sidewalk_update}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[IotwirelessPartnerAccountTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTags">IotwirelessPartnerAccountTags</a>]

A list of key-value pairs that contain metadata for the destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_partner_account#tags IotwirelessPartnerAccount#tags}

---

### IotwirelessPartnerAccountSidewalk <a name="IotwirelessPartnerAccountSidewalk" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalk"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalk.Initializer"></a>

```python
from cdktn_provider_awscc import iotwireless_partner_account

iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalk(
  app_server_private_key: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalk.property.appServerPrivateKey">app_server_private_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_partner_account#app_server_private_key IotwirelessPartnerAccount#app_server_private_key}. |

---

##### `app_server_private_key`<sup>Optional</sup> <a name="app_server_private_key" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalk.property.appServerPrivateKey"></a>

```python
app_server_private_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_partner_account#app_server_private_key IotwirelessPartnerAccount#app_server_private_key}.

---

### IotwirelessPartnerAccountSidewalkResponse <a name="IotwirelessPartnerAccountSidewalkResponse" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponse"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponse.Initializer"></a>

```python
from cdktn_provider_awscc import iotwireless_partner_account

iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponse(
  amazon_id: str = None,
  arn: str = None,
  fingerprint: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponse.property.amazonId">amazon_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_partner_account#amazon_id IotwirelessPartnerAccount#amazon_id}. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponse.property.arn">arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_partner_account#arn IotwirelessPartnerAccount#arn}. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponse.property.fingerprint">fingerprint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_partner_account#fingerprint IotwirelessPartnerAccount#fingerprint}. |

---

##### `amazon_id`<sup>Optional</sup> <a name="amazon_id" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponse.property.amazonId"></a>

```python
amazon_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_partner_account#amazon_id IotwirelessPartnerAccount#amazon_id}.

---

##### `arn`<sup>Optional</sup> <a name="arn" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponse.property.arn"></a>

```python
arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_partner_account#arn IotwirelessPartnerAccount#arn}.

---

##### `fingerprint`<sup>Optional</sup> <a name="fingerprint" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponse.property.fingerprint"></a>

```python
fingerprint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_partner_account#fingerprint IotwirelessPartnerAccount#fingerprint}.

---

### IotwirelessPartnerAccountSidewalkUpdate <a name="IotwirelessPartnerAccountSidewalkUpdate" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdate"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdate.Initializer"></a>

```python
from cdktn_provider_awscc import iotwireless_partner_account

iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdate(
  app_server_private_key: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdate.property.appServerPrivateKey">app_server_private_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_partner_account#app_server_private_key IotwirelessPartnerAccount#app_server_private_key}. |

---

##### `app_server_private_key`<sup>Optional</sup> <a name="app_server_private_key" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdate.property.appServerPrivateKey"></a>

```python
app_server_private_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_partner_account#app_server_private_key IotwirelessPartnerAccount#app_server_private_key}.

---

### IotwirelessPartnerAccountTags <a name="IotwirelessPartnerAccountTags" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTags.Initializer"></a>

```python
from cdktn_provider_awscc import iotwireless_partner_account

iotwirelessPartnerAccount.IotwirelessPartnerAccountTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTags.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_partner_account#key IotwirelessPartnerAccount#key}. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTags.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_partner_account#value IotwirelessPartnerAccount#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTags.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_partner_account#key IotwirelessPartnerAccount#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTags.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_partner_account#value IotwirelessPartnerAccount#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### IotwirelessPartnerAccountSidewalkOutputReference <a name="IotwirelessPartnerAccountSidewalkOutputReference" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import iotwireless_partner_account

iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkOutputReference.resetAppServerPrivateKey">reset_app_server_private_key</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_app_server_private_key` <a name="reset_app_server_private_key" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkOutputReference.resetAppServerPrivateKey"></a>

```python
def reset_app_server_private_key() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkOutputReference.property.appServerPrivateKeyInput">app_server_private_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkOutputReference.property.appServerPrivateKey">app_server_private_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalk">IotwirelessPartnerAccountSidewalk</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `app_server_private_key_input`<sup>Optional</sup> <a name="app_server_private_key_input" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkOutputReference.property.appServerPrivateKeyInput"></a>

```python
app_server_private_key_input: str
```

- *Type:* str

---

##### `app_server_private_key`<sup>Required</sup> <a name="app_server_private_key" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkOutputReference.property.appServerPrivateKey"></a>

```python
app_server_private_key: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IotwirelessPartnerAccountSidewalk
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalk">IotwirelessPartnerAccountSidewalk</a>

---


### IotwirelessPartnerAccountSidewalkResponseOutputReference <a name="IotwirelessPartnerAccountSidewalkResponseOutputReference" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import iotwireless_partner_account

iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.resetAmazonId">reset_amazon_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.resetArn">reset_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.resetFingerprint">reset_fingerprint</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_amazon_id` <a name="reset_amazon_id" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.resetAmazonId"></a>

```python
def reset_amazon_id() -> None
```

##### `reset_arn` <a name="reset_arn" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.resetArn"></a>

```python
def reset_arn() -> None
```

##### `reset_fingerprint` <a name="reset_fingerprint" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.resetFingerprint"></a>

```python
def reset_fingerprint() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.property.amazonIdInput">amazon_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.property.arnInput">arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.property.fingerprintInput">fingerprint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.property.amazonId">amazon_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.property.fingerprint">fingerprint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponse">IotwirelessPartnerAccountSidewalkResponse</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `amazon_id_input`<sup>Optional</sup> <a name="amazon_id_input" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.property.amazonIdInput"></a>

```python
amazon_id_input: str
```

- *Type:* str

---

##### `arn_input`<sup>Optional</sup> <a name="arn_input" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.property.arnInput"></a>

```python
arn_input: str
```

- *Type:* str

---

##### `fingerprint_input`<sup>Optional</sup> <a name="fingerprint_input" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.property.fingerprintInput"></a>

```python
fingerprint_input: str
```

- *Type:* str

---

##### `amazon_id`<sup>Required</sup> <a name="amazon_id" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.property.amazonId"></a>

```python
amazon_id: str
```

- *Type:* str

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `fingerprint`<sup>Required</sup> <a name="fingerprint" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.property.fingerprint"></a>

```python
fingerprint: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IotwirelessPartnerAccountSidewalkResponse
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponse">IotwirelessPartnerAccountSidewalkResponse</a>

---


### IotwirelessPartnerAccountSidewalkUpdateOutputReference <a name="IotwirelessPartnerAccountSidewalkUpdateOutputReference" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdateOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import iotwireless_partner_account

iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdateOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdateOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdateOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdateOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdateOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdateOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdateOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdateOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdateOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdateOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdateOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdateOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdateOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdateOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdateOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdateOutputReference.resetAppServerPrivateKey">reset_app_server_private_key</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdateOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdateOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdateOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdateOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdateOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdateOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdateOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdateOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdateOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdateOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdateOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdateOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdateOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_app_server_private_key` <a name="reset_app_server_private_key" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdateOutputReference.resetAppServerPrivateKey"></a>

```python
def reset_app_server_private_key() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdateOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdateOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdateOutputReference.property.appServerPrivateKeyInput">app_server_private_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdateOutputReference.property.appServerPrivateKey">app_server_private_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdateOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdate">IotwirelessPartnerAccountSidewalkUpdate</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdateOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdateOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `app_server_private_key_input`<sup>Optional</sup> <a name="app_server_private_key_input" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdateOutputReference.property.appServerPrivateKeyInput"></a>

```python
app_server_private_key_input: str
```

- *Type:* str

---

##### `app_server_private_key`<sup>Required</sup> <a name="app_server_private_key" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdateOutputReference.property.appServerPrivateKey"></a>

```python
app_server_private_key: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdateOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IotwirelessPartnerAccountSidewalkUpdate
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdate">IotwirelessPartnerAccountSidewalkUpdate</a>

---


### IotwirelessPartnerAccountTagsList <a name="IotwirelessPartnerAccountTagsList" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import iotwireless_partner_account

iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> IotwirelessPartnerAccountTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTags">IotwirelessPartnerAccountTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[IotwirelessPartnerAccountTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTags">IotwirelessPartnerAccountTags</a>]

---


### IotwirelessPartnerAccountTagsOutputReference <a name="IotwirelessPartnerAccountTagsOutputReference" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import iotwireless_partner_account

iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTags">IotwirelessPartnerAccountTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IotwirelessPartnerAccountTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTags">IotwirelessPartnerAccountTags</a>

---



