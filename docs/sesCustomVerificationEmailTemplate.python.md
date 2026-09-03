# `sesCustomVerificationEmailTemplate` Submodule <a name="`sesCustomVerificationEmailTemplate` Submodule" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SesCustomVerificationEmailTemplate <a name="SesCustomVerificationEmailTemplate" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ses_custom_verification_email_template awscc_ses_custom_verification_email_template}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.Initializer"></a>

```python
from cdktn_provider_awscc import ses_custom_verification_email_template

sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  failure_redirection_url: str,
  from_email_address: str,
  success_redirection_url: str,
  template_content: str,
  template_name: str,
  template_subject: str,
  tags: IResolvable | typing.List[SesCustomVerificationEmailTemplateTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.Initializer.parameter.failureRedirectionUrl">failure_redirection_url</a></code> | <code>str</code> | The URL that the recipient of the verification email is sent to if his or her address is not successfully verified. |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.Initializer.parameter.fromEmailAddress">from_email_address</a></code> | <code>str</code> | The email address that the custom verification email is sent from. |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.Initializer.parameter.successRedirectionUrl">success_redirection_url</a></code> | <code>str</code> | The URL that the recipient of the verification email is sent to if his or her address is successfully verified. |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.Initializer.parameter.templateContent">template_content</a></code> | <code>str</code> | The content of the custom verification email. |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.Initializer.parameter.templateName">template_name</a></code> | <code>str</code> | The name of the custom verification email template. |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.Initializer.parameter.templateSubject">template_subject</a></code> | <code>str</code> | The subject line of the custom verification email. |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTags">SesCustomVerificationEmailTemplateTags</a>]</code> | The tags (keys and values) associated with the tenant. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `failure_redirection_url`<sup>Required</sup> <a name="failure_redirection_url" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.Initializer.parameter.failureRedirectionUrl"></a>

- *Type:* str

The URL that the recipient of the verification email is sent to if his or her address is not successfully verified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ses_custom_verification_email_template#failure_redirection_url SesCustomVerificationEmailTemplate#failure_redirection_url}

---

##### `from_email_address`<sup>Required</sup> <a name="from_email_address" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.Initializer.parameter.fromEmailAddress"></a>

- *Type:* str

The email address that the custom verification email is sent from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ses_custom_verification_email_template#from_email_address SesCustomVerificationEmailTemplate#from_email_address}

---

##### `success_redirection_url`<sup>Required</sup> <a name="success_redirection_url" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.Initializer.parameter.successRedirectionUrl"></a>

- *Type:* str

The URL that the recipient of the verification email is sent to if his or her address is successfully verified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ses_custom_verification_email_template#success_redirection_url SesCustomVerificationEmailTemplate#success_redirection_url}

---

##### `template_content`<sup>Required</sup> <a name="template_content" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.Initializer.parameter.templateContent"></a>

- *Type:* str

The content of the custom verification email.

The total size of the email must be less than 10 MB. The message body may contain HTML, with some limitations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ses_custom_verification_email_template#template_content SesCustomVerificationEmailTemplate#template_content}

---

##### `template_name`<sup>Required</sup> <a name="template_name" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.Initializer.parameter.templateName"></a>

- *Type:* str

The name of the custom verification email template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ses_custom_verification_email_template#template_name SesCustomVerificationEmailTemplate#template_name}

---

##### `template_subject`<sup>Required</sup> <a name="template_subject" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.Initializer.parameter.templateSubject"></a>

- *Type:* str

The subject line of the custom verification email.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ses_custom_verification_email_template#template_subject SesCustomVerificationEmailTemplate#template_subject}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTags">SesCustomVerificationEmailTemplateTags</a>]

The tags (keys and values) associated with the tenant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ses_custom_verification_email_template#tags SesCustomVerificationEmailTemplate#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[SesCustomVerificationEmailTemplateTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTags">SesCustomVerificationEmailTemplateTags</a>]

---

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a SesCustomVerificationEmailTemplate resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.isConstruct"></a>

```python
from cdktn_provider_awscc import ses_custom_verification_email_template

sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.isTerraformElement"></a>

```python
from cdktn_provider_awscc import ses_custom_verification_email_template

sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.isTerraformResource"></a>

```python
from cdktn_provider_awscc import ses_custom_verification_email_template

sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import ses_custom_verification_email_template

sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a SesCustomVerificationEmailTemplate resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the SesCustomVerificationEmailTemplate to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing SesCustomVerificationEmailTemplate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ses_custom_verification_email_template#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the SesCustomVerificationEmailTemplate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsList">SesCustomVerificationEmailTemplateTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.property.failureRedirectionUrlInput">failure_redirection_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.property.fromEmailAddressInput">from_email_address_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.property.successRedirectionUrlInput">success_redirection_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTags">SesCustomVerificationEmailTemplateTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.property.templateContentInput">template_content_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.property.templateNameInput">template_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.property.templateSubjectInput">template_subject_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.property.failureRedirectionUrl">failure_redirection_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.property.fromEmailAddress">from_email_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.property.successRedirectionUrl">success_redirection_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.property.templateContent">template_content</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.property.templateName">template_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.property.templateSubject">template_subject</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.property.tags"></a>

```python
tags: SesCustomVerificationEmailTemplateTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsList">SesCustomVerificationEmailTemplateTagsList</a>

---

##### `failure_redirection_url_input`<sup>Optional</sup> <a name="failure_redirection_url_input" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.property.failureRedirectionUrlInput"></a>

```python
failure_redirection_url_input: str
```

- *Type:* str

---

##### `from_email_address_input`<sup>Optional</sup> <a name="from_email_address_input" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.property.fromEmailAddressInput"></a>

```python
from_email_address_input: str
```

- *Type:* str

---

##### `success_redirection_url_input`<sup>Optional</sup> <a name="success_redirection_url_input" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.property.successRedirectionUrlInput"></a>

```python
success_redirection_url_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[SesCustomVerificationEmailTemplateTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTags">SesCustomVerificationEmailTemplateTags</a>]

---

##### `template_content_input`<sup>Optional</sup> <a name="template_content_input" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.property.templateContentInput"></a>

```python
template_content_input: str
```

- *Type:* str

---

##### `template_name_input`<sup>Optional</sup> <a name="template_name_input" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.property.templateNameInput"></a>

```python
template_name_input: str
```

- *Type:* str

---

##### `template_subject_input`<sup>Optional</sup> <a name="template_subject_input" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.property.templateSubjectInput"></a>

```python
template_subject_input: str
```

- *Type:* str

---

##### `failure_redirection_url`<sup>Required</sup> <a name="failure_redirection_url" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.property.failureRedirectionUrl"></a>

```python
failure_redirection_url: str
```

- *Type:* str

---

##### `from_email_address`<sup>Required</sup> <a name="from_email_address" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.property.fromEmailAddress"></a>

```python
from_email_address: str
```

- *Type:* str

---

##### `success_redirection_url`<sup>Required</sup> <a name="success_redirection_url" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.property.successRedirectionUrl"></a>

```python
success_redirection_url: str
```

- *Type:* str

---

##### `template_content`<sup>Required</sup> <a name="template_content" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.property.templateContent"></a>

```python
template_content: str
```

- *Type:* str

---

##### `template_name`<sup>Required</sup> <a name="template_name" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.property.templateName"></a>

```python
template_name: str
```

- *Type:* str

---

##### `template_subject`<sup>Required</sup> <a name="template_subject" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.property.templateSubject"></a>

```python
template_subject: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### SesCustomVerificationEmailTemplateConfig <a name="SesCustomVerificationEmailTemplateConfig" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateConfig.Initializer"></a>

```python
from cdktn_provider_awscc import ses_custom_verification_email_template

sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  failure_redirection_url: str,
  from_email_address: str,
  success_redirection_url: str,
  template_content: str,
  template_name: str,
  template_subject: str,
  tags: IResolvable | typing.List[SesCustomVerificationEmailTemplateTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateConfig.property.failureRedirectionUrl">failure_redirection_url</a></code> | <code>str</code> | The URL that the recipient of the verification email is sent to if his or her address is not successfully verified. |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateConfig.property.fromEmailAddress">from_email_address</a></code> | <code>str</code> | The email address that the custom verification email is sent from. |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateConfig.property.successRedirectionUrl">success_redirection_url</a></code> | <code>str</code> | The URL that the recipient of the verification email is sent to if his or her address is successfully verified. |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateConfig.property.templateContent">template_content</a></code> | <code>str</code> | The content of the custom verification email. |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateConfig.property.templateName">template_name</a></code> | <code>str</code> | The name of the custom verification email template. |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateConfig.property.templateSubject">template_subject</a></code> | <code>str</code> | The subject line of the custom verification email. |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTags">SesCustomVerificationEmailTemplateTags</a>]</code> | The tags (keys and values) associated with the tenant. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `failure_redirection_url`<sup>Required</sup> <a name="failure_redirection_url" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateConfig.property.failureRedirectionUrl"></a>

```python
failure_redirection_url: str
```

- *Type:* str

The URL that the recipient of the verification email is sent to if his or her address is not successfully verified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ses_custom_verification_email_template#failure_redirection_url SesCustomVerificationEmailTemplate#failure_redirection_url}

---

##### `from_email_address`<sup>Required</sup> <a name="from_email_address" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateConfig.property.fromEmailAddress"></a>

```python
from_email_address: str
```

- *Type:* str

The email address that the custom verification email is sent from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ses_custom_verification_email_template#from_email_address SesCustomVerificationEmailTemplate#from_email_address}

---

##### `success_redirection_url`<sup>Required</sup> <a name="success_redirection_url" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateConfig.property.successRedirectionUrl"></a>

```python
success_redirection_url: str
```

- *Type:* str

The URL that the recipient of the verification email is sent to if his or her address is successfully verified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ses_custom_verification_email_template#success_redirection_url SesCustomVerificationEmailTemplate#success_redirection_url}

---

##### `template_content`<sup>Required</sup> <a name="template_content" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateConfig.property.templateContent"></a>

```python
template_content: str
```

- *Type:* str

The content of the custom verification email.

The total size of the email must be less than 10 MB. The message body may contain HTML, with some limitations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ses_custom_verification_email_template#template_content SesCustomVerificationEmailTemplate#template_content}

---

##### `template_name`<sup>Required</sup> <a name="template_name" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateConfig.property.templateName"></a>

```python
template_name: str
```

- *Type:* str

The name of the custom verification email template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ses_custom_verification_email_template#template_name SesCustomVerificationEmailTemplate#template_name}

---

##### `template_subject`<sup>Required</sup> <a name="template_subject" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateConfig.property.templateSubject"></a>

```python
template_subject: str
```

- *Type:* str

The subject line of the custom verification email.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ses_custom_verification_email_template#template_subject SesCustomVerificationEmailTemplate#template_subject}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[SesCustomVerificationEmailTemplateTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTags">SesCustomVerificationEmailTemplateTags</a>]

The tags (keys and values) associated with the tenant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ses_custom_verification_email_template#tags SesCustomVerificationEmailTemplate#tags}

---

### SesCustomVerificationEmailTemplateTags <a name="SesCustomVerificationEmailTemplateTags" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTags.Initializer"></a>

```python
from cdktn_provider_awscc import ses_custom_verification_email_template

sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTags.property.key">key</a></code> | <code>str</code> | The key of the key-value tag. |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTags.property.value">value</a></code> | <code>str</code> | The value of the key-value tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTags.property.key"></a>

```python
key: str
```

- *Type:* str

The key of the key-value tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ses_custom_verification_email_template#key SesCustomVerificationEmailTemplate#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTags.property.value"></a>

```python
value: str
```

- *Type:* str

The value of the key-value tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ses_custom_verification_email_template#value SesCustomVerificationEmailTemplate#value}

---

## Classes <a name="Classes" id="Classes"></a>

### SesCustomVerificationEmailTemplateTagsList <a name="SesCustomVerificationEmailTemplateTagsList" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import ses_custom_verification_email_template

sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SesCustomVerificationEmailTemplateTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTags">SesCustomVerificationEmailTemplateTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[SesCustomVerificationEmailTemplateTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTags">SesCustomVerificationEmailTemplateTags</a>]

---


### SesCustomVerificationEmailTemplateTagsOutputReference <a name="SesCustomVerificationEmailTemplateTagsOutputReference" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import ses_custom_verification_email_template

sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTags">SesCustomVerificationEmailTemplateTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SesCustomVerificationEmailTemplateTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTags">SesCustomVerificationEmailTemplateTags</a>

---



