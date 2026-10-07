# `smsvoiceRegistrationAttachment` Submodule <a name="`smsvoiceRegistrationAttachment` Submodule" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SmsvoiceRegistrationAttachment <a name="SmsvoiceRegistrationAttachment" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/smsvoice_registration_attachment awscc_smsvoice_registration_attachment}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.Initializer"></a>

```python
from cdktn_provider_awscc import smsvoice_registration_attachment

smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  attachment_body: str = None,
  attachment_url: str = None,
  tags: IResolvable | typing.List[SmsvoiceRegistrationAttachmentTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.Initializer.parameter.attachmentBody">attachment_body</a></code> | <code>str</code> | The registration file to upload. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.Initializer.parameter.attachmentUrl">attachment_url</a></code> | <code>str</code> | A URL to the required registration file. For example, the URL to an MMS/shortcode form. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachmentTags">SmsvoiceRegistrationAttachmentTags</a>]</code> | An array of tags (key and value pairs) to associate with the registration attachment. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `attachment_body`<sup>Optional</sup> <a name="attachment_body" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.Initializer.parameter.attachmentBody"></a>

- *Type:* str

The registration file to upload.

The maximum file size is 1500KB and valid file extensions are PDF, JPEG and PNG.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/smsvoice_registration_attachment#attachment_body SmsvoiceRegistrationAttachment#attachment_body}

---

##### `attachment_url`<sup>Optional</sup> <a name="attachment_url" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.Initializer.parameter.attachmentUrl"></a>

- *Type:* str

A URL to the required registration file. For example, the URL to an MMS/shortcode form.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/smsvoice_registration_attachment#attachment_url SmsvoiceRegistrationAttachment#attachment_url}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachmentTags">SmsvoiceRegistrationAttachmentTags</a>]

An array of tags (key and value pairs) to associate with the registration attachment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/smsvoice_registration_attachment#tags SmsvoiceRegistrationAttachment#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.resetAttachmentBody">reset_attachment_body</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.resetAttachmentUrl">reset_attachment_url</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[SmsvoiceRegistrationAttachmentTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachmentTags">SmsvoiceRegistrationAttachmentTags</a>]

---

##### `reset_attachment_body` <a name="reset_attachment_body" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.resetAttachmentBody"></a>

```python
def reset_attachment_body() -> None
```

##### `reset_attachment_url` <a name="reset_attachment_url" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.resetAttachmentUrl"></a>

```python
def reset_attachment_url() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a SmsvoiceRegistrationAttachment resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.isConstruct"></a>

```python
from cdktn_provider_awscc import smsvoice_registration_attachment

smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.isTerraformElement"></a>

```python
from cdktn_provider_awscc import smsvoice_registration_attachment

smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.isTerraformResource"></a>

```python
from cdktn_provider_awscc import smsvoice_registration_attachment

smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import smsvoice_registration_attachment

smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a SmsvoiceRegistrationAttachment resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the SmsvoiceRegistrationAttachment to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing SmsvoiceRegistrationAttachment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/smsvoice_registration_attachment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the SmsvoiceRegistrationAttachment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.property.attachmentStatus">attachment_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.property.createdTimestamp">created_timestamp</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.property.registrationAttachmentArn">registration_attachment_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.property.registrationAttachmentId">registration_attachment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachmentTagsList">SmsvoiceRegistrationAttachmentTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.property.uploadedAttachmentUrl">uploaded_attachment_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.property.attachmentBodyInput">attachment_body_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.property.attachmentUrlInput">attachment_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachmentTags">SmsvoiceRegistrationAttachmentTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.property.attachmentBody">attachment_body</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.property.attachmentUrl">attachment_url</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `attachment_status`<sup>Required</sup> <a name="attachment_status" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.property.attachmentStatus"></a>

```python
attachment_status: str
```

- *Type:* str

---

##### `created_timestamp`<sup>Required</sup> <a name="created_timestamp" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.property.createdTimestamp"></a>

```python
created_timestamp: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `registration_attachment_arn`<sup>Required</sup> <a name="registration_attachment_arn" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.property.registrationAttachmentArn"></a>

```python
registration_attachment_arn: str
```

- *Type:* str

---

##### `registration_attachment_id`<sup>Required</sup> <a name="registration_attachment_id" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.property.registrationAttachmentId"></a>

```python
registration_attachment_id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.property.tags"></a>

```python
tags: SmsvoiceRegistrationAttachmentTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachmentTagsList">SmsvoiceRegistrationAttachmentTagsList</a>

---

##### `uploaded_attachment_url`<sup>Required</sup> <a name="uploaded_attachment_url" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.property.uploadedAttachmentUrl"></a>

```python
uploaded_attachment_url: str
```

- *Type:* str

---

##### `attachment_body_input`<sup>Optional</sup> <a name="attachment_body_input" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.property.attachmentBodyInput"></a>

```python
attachment_body_input: str
```

- *Type:* str

---

##### `attachment_url_input`<sup>Optional</sup> <a name="attachment_url_input" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.property.attachmentUrlInput"></a>

```python
attachment_url_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[SmsvoiceRegistrationAttachmentTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachmentTags">SmsvoiceRegistrationAttachmentTags</a>]

---

##### `attachment_body`<sup>Required</sup> <a name="attachment_body" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.property.attachmentBody"></a>

```python
attachment_body: str
```

- *Type:* str

---

##### `attachment_url`<sup>Required</sup> <a name="attachment_url" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.property.attachmentUrl"></a>

```python
attachment_url: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachment.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### SmsvoiceRegistrationAttachmentConfig <a name="SmsvoiceRegistrationAttachmentConfig" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachmentConfig.Initializer"></a>

```python
from cdktn_provider_awscc import smsvoice_registration_attachment

smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachmentConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  attachment_body: str = None,
  attachment_url: str = None,
  tags: IResolvable | typing.List[SmsvoiceRegistrationAttachmentTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachmentConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachmentConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachmentConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachmentConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachmentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachmentConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachmentConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachmentConfig.property.attachmentBody">attachment_body</a></code> | <code>str</code> | The registration file to upload. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachmentConfig.property.attachmentUrl">attachment_url</a></code> | <code>str</code> | A URL to the required registration file. For example, the URL to an MMS/shortcode form. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachmentConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachmentTags">SmsvoiceRegistrationAttachmentTags</a>]</code> | An array of tags (key and value pairs) to associate with the registration attachment. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachmentConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachmentConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachmentConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachmentConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachmentConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachmentConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachmentConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `attachment_body`<sup>Optional</sup> <a name="attachment_body" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachmentConfig.property.attachmentBody"></a>

```python
attachment_body: str
```

- *Type:* str

The registration file to upload.

The maximum file size is 1500KB and valid file extensions are PDF, JPEG and PNG.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/smsvoice_registration_attachment#attachment_body SmsvoiceRegistrationAttachment#attachment_body}

---

##### `attachment_url`<sup>Optional</sup> <a name="attachment_url" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachmentConfig.property.attachmentUrl"></a>

```python
attachment_url: str
```

- *Type:* str

A URL to the required registration file. For example, the URL to an MMS/shortcode form.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/smsvoice_registration_attachment#attachment_url SmsvoiceRegistrationAttachment#attachment_url}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachmentConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[SmsvoiceRegistrationAttachmentTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachmentTags">SmsvoiceRegistrationAttachmentTags</a>]

An array of tags (key and value pairs) to associate with the registration attachment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/smsvoice_registration_attachment#tags SmsvoiceRegistrationAttachment#tags}

---

### SmsvoiceRegistrationAttachmentTags <a name="SmsvoiceRegistrationAttachmentTags" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachmentTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachmentTags.Initializer"></a>

```python
from cdktn_provider_awscc import smsvoice_registration_attachment

smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachmentTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachmentTags.property.key">key</a></code> | <code>str</code> | The key identifier, or name, of the tag. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachmentTags.property.value">value</a></code> | <code>str</code> | The string value associated with the key of the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachmentTags.property.key"></a>

```python
key: str
```

- *Type:* str

The key identifier, or name, of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/smsvoice_registration_attachment#key SmsvoiceRegistrationAttachment#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachmentTags.property.value"></a>

```python
value: str
```

- *Type:* str

The string value associated with the key of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/smsvoice_registration_attachment#value SmsvoiceRegistrationAttachment#value}

---

## Classes <a name="Classes" id="Classes"></a>

### SmsvoiceRegistrationAttachmentTagsList <a name="SmsvoiceRegistrationAttachmentTagsList" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachmentTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachmentTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import smsvoice_registration_attachment

smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachmentTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachmentTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachmentTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachmentTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachmentTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachmentTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachmentTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachmentTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachmentTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachmentTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachmentTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachmentTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachmentTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachmentTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachmentTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachmentTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachmentTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachmentTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachmentTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SmsvoiceRegistrationAttachmentTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachmentTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachmentTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachmentTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachmentTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachmentTags">SmsvoiceRegistrationAttachmentTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachmentTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachmentTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachmentTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[SmsvoiceRegistrationAttachmentTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachmentTags">SmsvoiceRegistrationAttachmentTags</a>]

---


### SmsvoiceRegistrationAttachmentTagsOutputReference <a name="SmsvoiceRegistrationAttachmentTagsOutputReference" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachmentTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachmentTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import smsvoice_registration_attachment

smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachmentTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachmentTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachmentTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachmentTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachmentTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachmentTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachmentTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachmentTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachmentTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachmentTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachmentTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachmentTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachmentTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachmentTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachmentTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachmentTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachmentTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachmentTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachmentTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachmentTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachmentTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachmentTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachmentTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachmentTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachmentTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachmentTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachmentTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachmentTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachmentTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachmentTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachmentTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachmentTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachmentTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachmentTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachmentTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachmentTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachmentTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachmentTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachmentTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachmentTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachmentTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachmentTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachmentTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachmentTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachmentTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachmentTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachmentTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachmentTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachmentTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachmentTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachmentTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachmentTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachmentTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachmentTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachmentTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachmentTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachmentTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachmentTags">SmsvoiceRegistrationAttachmentTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachmentTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachmentTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachmentTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachmentTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachmentTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachmentTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachmentTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SmsvoiceRegistrationAttachmentTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.smsvoiceRegistrationAttachment.SmsvoiceRegistrationAttachmentTags">SmsvoiceRegistrationAttachmentTags</a>

---



