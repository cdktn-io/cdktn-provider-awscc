# `sesEmailIdentity` Submodule <a name="`sesEmailIdentity` Submodule" id="@cdktn/provider-awscc.sesEmailIdentity"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SesEmailIdentity <a name="SesEmailIdentity" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_email_identity awscc_ses_email_identity}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.Initializer"></a>

```python
from cdktn_provider_awscc import ses_email_identity

sesEmailIdentity.SesEmailIdentity(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  email_identity: str,
  configuration_set_attributes: SesEmailIdentityConfigurationSetAttributes = None,
  dkim_attributes: SesEmailIdentityDkimAttributes = None,
  dkim_signing_attributes: SesEmailIdentityDkimSigningAttributes = None,
  feedback_attributes: SesEmailIdentityFeedbackAttributes = None,
  mail_from_attributes: SesEmailIdentityMailFromAttributes = None,
  tags: IResolvable | typing.List[SesEmailIdentityTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.Initializer.parameter.emailIdentity">email_identity</a></code> | <code>str</code> | The email address or domain to verify. |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.Initializer.parameter.configurationSetAttributes">configuration_set_attributes</a></code> | <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfigurationSetAttributes">SesEmailIdentityConfigurationSetAttributes</a></code> | Used to associate a configuration set with an email identity. |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.Initializer.parameter.dkimAttributes">dkim_attributes</a></code> | <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimAttributes">SesEmailIdentityDkimAttributes</a></code> | Used to enable or disable DKIM authentication for an email identity. |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.Initializer.parameter.dkimSigningAttributes">dkim_signing_attributes</a></code> | <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributes">SesEmailIdentityDkimSigningAttributes</a></code> | If your request includes this object, Amazon SES configures the identity to use Bring Your Own DKIM (BYODKIM) for DKIM authentication purposes, or, configures the key length to be used for Easy DKIM. |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.Initializer.parameter.feedbackAttributes">feedback_attributes</a></code> | <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityFeedbackAttributes">SesEmailIdentityFeedbackAttributes</a></code> | Used to enable or disable feedback forwarding for an identity. |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.Initializer.parameter.mailFromAttributes">mail_from_attributes</a></code> | <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityMailFromAttributes">SesEmailIdentityMailFromAttributes</a></code> | Used to enable or disable the custom Mail-From domain configuration for an email identity. |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTags">SesEmailIdentityTags</a>]</code> | The tags (keys and values) associated with the email identity. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `email_identity`<sup>Required</sup> <a name="email_identity" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.Initializer.parameter.emailIdentity"></a>

- *Type:* str

The email address or domain to verify.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_email_identity#email_identity SesEmailIdentity#email_identity}

---

##### `configuration_set_attributes`<sup>Optional</sup> <a name="configuration_set_attributes" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.Initializer.parameter.configurationSetAttributes"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfigurationSetAttributes">SesEmailIdentityConfigurationSetAttributes</a>

Used to associate a configuration set with an email identity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_email_identity#configuration_set_attributes SesEmailIdentity#configuration_set_attributes}

---

##### `dkim_attributes`<sup>Optional</sup> <a name="dkim_attributes" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.Initializer.parameter.dkimAttributes"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimAttributes">SesEmailIdentityDkimAttributes</a>

Used to enable or disable DKIM authentication for an email identity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_email_identity#dkim_attributes SesEmailIdentity#dkim_attributes}

---

##### `dkim_signing_attributes`<sup>Optional</sup> <a name="dkim_signing_attributes" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.Initializer.parameter.dkimSigningAttributes"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributes">SesEmailIdentityDkimSigningAttributes</a>

If your request includes this object, Amazon SES configures the identity to use Bring Your Own DKIM (BYODKIM) for DKIM authentication purposes, or, configures the key length to be used for Easy DKIM.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_email_identity#dkim_signing_attributes SesEmailIdentity#dkim_signing_attributes}

---

##### `feedback_attributes`<sup>Optional</sup> <a name="feedback_attributes" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.Initializer.parameter.feedbackAttributes"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityFeedbackAttributes">SesEmailIdentityFeedbackAttributes</a>

Used to enable or disable feedback forwarding for an identity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_email_identity#feedback_attributes SesEmailIdentity#feedback_attributes}

---

##### `mail_from_attributes`<sup>Optional</sup> <a name="mail_from_attributes" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.Initializer.parameter.mailFromAttributes"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityMailFromAttributes">SesEmailIdentityMailFromAttributes</a>

Used to enable or disable the custom Mail-From domain configuration for an email identity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_email_identity#mail_from_attributes SesEmailIdentity#mail_from_attributes}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTags">SesEmailIdentityTags</a>]

The tags (keys and values) associated with the email identity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_email_identity#tags SesEmailIdentity#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.putConfigurationSetAttributes">put_configuration_set_attributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.putDkimAttributes">put_dkim_attributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.putDkimSigningAttributes">put_dkim_signing_attributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.putFeedbackAttributes">put_feedback_attributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.putMailFromAttributes">put_mail_from_attributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.resetConfigurationSetAttributes">reset_configuration_set_attributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.resetDkimAttributes">reset_dkim_attributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.resetDkimSigningAttributes">reset_dkim_signing_attributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.resetFeedbackAttributes">reset_feedback_attributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.resetMailFromAttributes">reset_mail_from_attributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_configuration_set_attributes` <a name="put_configuration_set_attributes" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.putConfigurationSetAttributes"></a>

```python
def put_configuration_set_attributes(
  configuration_set_name: str = None
) -> None
```

###### `configuration_set_name`<sup>Optional</sup> <a name="configuration_set_name" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.putConfigurationSetAttributes.parameter.configurationSetName"></a>

- *Type:* str

The configuration set to use by default when sending from this identity.

Note that any configuration set defined in the email sending request takes precedence.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_email_identity#configuration_set_name SesEmailIdentity#configuration_set_name}

---

##### `put_dkim_attributes` <a name="put_dkim_attributes" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.putDkimAttributes"></a>

```python
def put_dkim_attributes(
  signing_enabled: bool | IResolvable = None
) -> None
```

###### `signing_enabled`<sup>Optional</sup> <a name="signing_enabled" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.putDkimAttributes.parameter.signingEnabled"></a>

- *Type:* bool | cdktn.IResolvable

Sets the DKIM signing configuration for the identity.

When you set this value true, then the messages that are sent from the identity are signed using DKIM. If you set this value to false, your messages are sent without DKIM signing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_email_identity#signing_enabled SesEmailIdentity#signing_enabled}

---

##### `put_dkim_signing_attributes` <a name="put_dkim_signing_attributes" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.putDkimSigningAttributes"></a>

```python
def put_dkim_signing_attributes(
  domain_signing_private_key: str = None,
  domain_signing_selector: str = None,
  next_signing_key_length: str = None
) -> None
```

###### `domain_signing_private_key`<sup>Optional</sup> <a name="domain_signing_private_key" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.putDkimSigningAttributes.parameter.domainSigningPrivateKey"></a>

- *Type:* str

[Bring Your Own DKIM] A private key that's used to generate a DKIM signature.

The private key must use 1024 or 2048-bit RSA encryption, and must be encoded using base64 encoding.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_email_identity#domain_signing_private_key SesEmailIdentity#domain_signing_private_key}

---

###### `domain_signing_selector`<sup>Optional</sup> <a name="domain_signing_selector" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.putDkimSigningAttributes.parameter.domainSigningSelector"></a>

- *Type:* str

[Bring Your Own DKIM] A string that's used to identify a public key in the DNS configuration for a domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_email_identity#domain_signing_selector SesEmailIdentity#domain_signing_selector}

---

###### `next_signing_key_length`<sup>Optional</sup> <a name="next_signing_key_length" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.putDkimSigningAttributes.parameter.nextSigningKeyLength"></a>

- *Type:* str

[Easy DKIM] The key length of the future DKIM key pair to be generated.

This can be changed at most once per day.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_email_identity#next_signing_key_length SesEmailIdentity#next_signing_key_length}

---

##### `put_feedback_attributes` <a name="put_feedback_attributes" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.putFeedbackAttributes"></a>

```python
def put_feedback_attributes(
  email_forwarding_enabled: bool | IResolvable = None
) -> None
```

###### `email_forwarding_enabled`<sup>Optional</sup> <a name="email_forwarding_enabled" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.putFeedbackAttributes.parameter.emailForwardingEnabled"></a>

- *Type:* bool | cdktn.IResolvable

If the value is true, you receive email notifications when bounce or complaint events occur.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_email_identity#email_forwarding_enabled SesEmailIdentity#email_forwarding_enabled}

---

##### `put_mail_from_attributes` <a name="put_mail_from_attributes" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.putMailFromAttributes"></a>

```python
def put_mail_from_attributes(
  behavior_on_mx_failure: str = None,
  mail_from_domain: str = None
) -> None
```

###### `behavior_on_mx_failure`<sup>Optional</sup> <a name="behavior_on_mx_failure" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.putMailFromAttributes.parameter.behaviorOnMxFailure"></a>

- *Type:* str

The action to take if the required MX record isn't found when you send an email.

When you set this value to UseDefaultValue , the mail is sent using amazonses.com as the MAIL FROM domain. When you set this value to RejectMessage , the Amazon SES API v2 returns a MailFromDomainNotVerified error, and doesn't attempt to deliver the email.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_email_identity#behavior_on_mx_failure SesEmailIdentity#behavior_on_mx_failure}

---

###### `mail_from_domain`<sup>Optional</sup> <a name="mail_from_domain" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.putMailFromAttributes.parameter.mailFromDomain"></a>

- *Type:* str

The custom MAIL FROM domain that you want the verified identity to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_email_identity#mail_from_domain SesEmailIdentity#mail_from_domain}

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[SesEmailIdentityTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTags">SesEmailIdentityTags</a>]

---

##### `reset_configuration_set_attributes` <a name="reset_configuration_set_attributes" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.resetConfigurationSetAttributes"></a>

```python
def reset_configuration_set_attributes() -> None
```

##### `reset_dkim_attributes` <a name="reset_dkim_attributes" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.resetDkimAttributes"></a>

```python
def reset_dkim_attributes() -> None
```

##### `reset_dkim_signing_attributes` <a name="reset_dkim_signing_attributes" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.resetDkimSigningAttributes"></a>

```python
def reset_dkim_signing_attributes() -> None
```

##### `reset_feedback_attributes` <a name="reset_feedback_attributes" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.resetFeedbackAttributes"></a>

```python
def reset_feedback_attributes() -> None
```

##### `reset_mail_from_attributes` <a name="reset_mail_from_attributes" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.resetMailFromAttributes"></a>

```python
def reset_mail_from_attributes() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a SesEmailIdentity resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.isConstruct"></a>

```python
from cdktn_provider_awscc import ses_email_identity

sesEmailIdentity.SesEmailIdentity.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.isTerraformElement"></a>

```python
from cdktn_provider_awscc import ses_email_identity

sesEmailIdentity.SesEmailIdentity.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.isTerraformResource"></a>

```python
from cdktn_provider_awscc import ses_email_identity

sesEmailIdentity.SesEmailIdentity.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import ses_email_identity

sesEmailIdentity.SesEmailIdentity.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a SesEmailIdentity resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the SesEmailIdentity to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing SesEmailIdentity that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_email_identity#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the SesEmailIdentity to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.property.configurationSetAttributes">configuration_set_attributes</a></code> | <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfigurationSetAttributesOutputReference">SesEmailIdentityConfigurationSetAttributesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.property.dkimAttributes">dkim_attributes</a></code> | <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimAttributesOutputReference">SesEmailIdentityDkimAttributesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.property.dkimDnsTokenName1">dkim_dns_token_name1</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.property.dkimDnsTokenName2">dkim_dns_token_name2</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.property.dkimDnsTokenName3">dkim_dns_token_name3</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.property.dkimDnsTokenValue1">dkim_dns_token_value1</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.property.dkimDnsTokenValue2">dkim_dns_token_value2</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.property.dkimDnsTokenValue3">dkim_dns_token_value3</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.property.dkimSigningAttributes">dkim_signing_attributes</a></code> | <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributesOutputReference">SesEmailIdentityDkimSigningAttributesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.property.feedbackAttributes">feedback_attributes</a></code> | <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityFeedbackAttributesOutputReference">SesEmailIdentityFeedbackAttributesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.property.mailFromAttributes">mail_from_attributes</a></code> | <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityMailFromAttributesOutputReference">SesEmailIdentityMailFromAttributesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsList">SesEmailIdentityTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.property.configurationSetAttributesInput">configuration_set_attributes_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfigurationSetAttributes">SesEmailIdentityConfigurationSetAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.property.dkimAttributesInput">dkim_attributes_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimAttributes">SesEmailIdentityDkimAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.property.dkimSigningAttributesInput">dkim_signing_attributes_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributes">SesEmailIdentityDkimSigningAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.property.emailIdentityInput">email_identity_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.property.feedbackAttributesInput">feedback_attributes_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityFeedbackAttributes">SesEmailIdentityFeedbackAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.property.mailFromAttributesInput">mail_from_attributes_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityMailFromAttributes">SesEmailIdentityMailFromAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTags">SesEmailIdentityTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.property.emailIdentity">email_identity</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `configuration_set_attributes`<sup>Required</sup> <a name="configuration_set_attributes" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.property.configurationSetAttributes"></a>

```python
configuration_set_attributes: SesEmailIdentityConfigurationSetAttributesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfigurationSetAttributesOutputReference">SesEmailIdentityConfigurationSetAttributesOutputReference</a>

---

##### `dkim_attributes`<sup>Required</sup> <a name="dkim_attributes" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.property.dkimAttributes"></a>

```python
dkim_attributes: SesEmailIdentityDkimAttributesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimAttributesOutputReference">SesEmailIdentityDkimAttributesOutputReference</a>

---

##### `dkim_dns_token_name1`<sup>Required</sup> <a name="dkim_dns_token_name1" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.property.dkimDnsTokenName1"></a>

```python
dkim_dns_token_name1: str
```

- *Type:* str

---

##### `dkim_dns_token_name2`<sup>Required</sup> <a name="dkim_dns_token_name2" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.property.dkimDnsTokenName2"></a>

```python
dkim_dns_token_name2: str
```

- *Type:* str

---

##### `dkim_dns_token_name3`<sup>Required</sup> <a name="dkim_dns_token_name3" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.property.dkimDnsTokenName3"></a>

```python
dkim_dns_token_name3: str
```

- *Type:* str

---

##### `dkim_dns_token_value1`<sup>Required</sup> <a name="dkim_dns_token_value1" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.property.dkimDnsTokenValue1"></a>

```python
dkim_dns_token_value1: str
```

- *Type:* str

---

##### `dkim_dns_token_value2`<sup>Required</sup> <a name="dkim_dns_token_value2" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.property.dkimDnsTokenValue2"></a>

```python
dkim_dns_token_value2: str
```

- *Type:* str

---

##### `dkim_dns_token_value3`<sup>Required</sup> <a name="dkim_dns_token_value3" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.property.dkimDnsTokenValue3"></a>

```python
dkim_dns_token_value3: str
```

- *Type:* str

---

##### `dkim_signing_attributes`<sup>Required</sup> <a name="dkim_signing_attributes" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.property.dkimSigningAttributes"></a>

```python
dkim_signing_attributes: SesEmailIdentityDkimSigningAttributesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributesOutputReference">SesEmailIdentityDkimSigningAttributesOutputReference</a>

---

##### `feedback_attributes`<sup>Required</sup> <a name="feedback_attributes" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.property.feedbackAttributes"></a>

```python
feedback_attributes: SesEmailIdentityFeedbackAttributesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityFeedbackAttributesOutputReference">SesEmailIdentityFeedbackAttributesOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `mail_from_attributes`<sup>Required</sup> <a name="mail_from_attributes" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.property.mailFromAttributes"></a>

```python
mail_from_attributes: SesEmailIdentityMailFromAttributesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityMailFromAttributesOutputReference">SesEmailIdentityMailFromAttributesOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.property.tags"></a>

```python
tags: SesEmailIdentityTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsList">SesEmailIdentityTagsList</a>

---

##### `configuration_set_attributes_input`<sup>Optional</sup> <a name="configuration_set_attributes_input" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.property.configurationSetAttributesInput"></a>

```python
configuration_set_attributes_input: IResolvable | SesEmailIdentityConfigurationSetAttributes
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfigurationSetAttributes">SesEmailIdentityConfigurationSetAttributes</a>

---

##### `dkim_attributes_input`<sup>Optional</sup> <a name="dkim_attributes_input" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.property.dkimAttributesInput"></a>

```python
dkim_attributes_input: IResolvable | SesEmailIdentityDkimAttributes
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimAttributes">SesEmailIdentityDkimAttributes</a>

---

##### `dkim_signing_attributes_input`<sup>Optional</sup> <a name="dkim_signing_attributes_input" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.property.dkimSigningAttributesInput"></a>

```python
dkim_signing_attributes_input: IResolvable | SesEmailIdentityDkimSigningAttributes
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributes">SesEmailIdentityDkimSigningAttributes</a>

---

##### `email_identity_input`<sup>Optional</sup> <a name="email_identity_input" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.property.emailIdentityInput"></a>

```python
email_identity_input: str
```

- *Type:* str

---

##### `feedback_attributes_input`<sup>Optional</sup> <a name="feedback_attributes_input" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.property.feedbackAttributesInput"></a>

```python
feedback_attributes_input: IResolvable | SesEmailIdentityFeedbackAttributes
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityFeedbackAttributes">SesEmailIdentityFeedbackAttributes</a>

---

##### `mail_from_attributes_input`<sup>Optional</sup> <a name="mail_from_attributes_input" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.property.mailFromAttributesInput"></a>

```python
mail_from_attributes_input: IResolvable | SesEmailIdentityMailFromAttributes
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityMailFromAttributes">SesEmailIdentityMailFromAttributes</a>

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[SesEmailIdentityTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTags">SesEmailIdentityTags</a>]

---

##### `email_identity`<sup>Required</sup> <a name="email_identity" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.property.emailIdentity"></a>

```python
email_identity: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### SesEmailIdentityConfig <a name="SesEmailIdentityConfig" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfig.Initializer"></a>

```python
from cdktn_provider_awscc import ses_email_identity

sesEmailIdentity.SesEmailIdentityConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  email_identity: str,
  configuration_set_attributes: SesEmailIdentityConfigurationSetAttributes = None,
  dkim_attributes: SesEmailIdentityDkimAttributes = None,
  dkim_signing_attributes: SesEmailIdentityDkimSigningAttributes = None,
  feedback_attributes: SesEmailIdentityFeedbackAttributes = None,
  mail_from_attributes: SesEmailIdentityMailFromAttributes = None,
  tags: IResolvable | typing.List[SesEmailIdentityTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfig.property.emailIdentity">email_identity</a></code> | <code>str</code> | The email address or domain to verify. |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfig.property.configurationSetAttributes">configuration_set_attributes</a></code> | <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfigurationSetAttributes">SesEmailIdentityConfigurationSetAttributes</a></code> | Used to associate a configuration set with an email identity. |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfig.property.dkimAttributes">dkim_attributes</a></code> | <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimAttributes">SesEmailIdentityDkimAttributes</a></code> | Used to enable or disable DKIM authentication for an email identity. |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfig.property.dkimSigningAttributes">dkim_signing_attributes</a></code> | <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributes">SesEmailIdentityDkimSigningAttributes</a></code> | If your request includes this object, Amazon SES configures the identity to use Bring Your Own DKIM (BYODKIM) for DKIM authentication purposes, or, configures the key length to be used for Easy DKIM. |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfig.property.feedbackAttributes">feedback_attributes</a></code> | <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityFeedbackAttributes">SesEmailIdentityFeedbackAttributes</a></code> | Used to enable or disable feedback forwarding for an identity. |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfig.property.mailFromAttributes">mail_from_attributes</a></code> | <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityMailFromAttributes">SesEmailIdentityMailFromAttributes</a></code> | Used to enable or disable the custom Mail-From domain configuration for an email identity. |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTags">SesEmailIdentityTags</a>]</code> | The tags (keys and values) associated with the email identity. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `email_identity`<sup>Required</sup> <a name="email_identity" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfig.property.emailIdentity"></a>

```python
email_identity: str
```

- *Type:* str

The email address or domain to verify.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_email_identity#email_identity SesEmailIdentity#email_identity}

---

##### `configuration_set_attributes`<sup>Optional</sup> <a name="configuration_set_attributes" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfig.property.configurationSetAttributes"></a>

```python
configuration_set_attributes: SesEmailIdentityConfigurationSetAttributes
```

- *Type:* <a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfigurationSetAttributes">SesEmailIdentityConfigurationSetAttributes</a>

Used to associate a configuration set with an email identity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_email_identity#configuration_set_attributes SesEmailIdentity#configuration_set_attributes}

---

##### `dkim_attributes`<sup>Optional</sup> <a name="dkim_attributes" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfig.property.dkimAttributes"></a>

```python
dkim_attributes: SesEmailIdentityDkimAttributes
```

- *Type:* <a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimAttributes">SesEmailIdentityDkimAttributes</a>

Used to enable or disable DKIM authentication for an email identity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_email_identity#dkim_attributes SesEmailIdentity#dkim_attributes}

---

##### `dkim_signing_attributes`<sup>Optional</sup> <a name="dkim_signing_attributes" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfig.property.dkimSigningAttributes"></a>

```python
dkim_signing_attributes: SesEmailIdentityDkimSigningAttributes
```

- *Type:* <a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributes">SesEmailIdentityDkimSigningAttributes</a>

If your request includes this object, Amazon SES configures the identity to use Bring Your Own DKIM (BYODKIM) for DKIM authentication purposes, or, configures the key length to be used for Easy DKIM.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_email_identity#dkim_signing_attributes SesEmailIdentity#dkim_signing_attributes}

---

##### `feedback_attributes`<sup>Optional</sup> <a name="feedback_attributes" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfig.property.feedbackAttributes"></a>

```python
feedback_attributes: SesEmailIdentityFeedbackAttributes
```

- *Type:* <a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityFeedbackAttributes">SesEmailIdentityFeedbackAttributes</a>

Used to enable or disable feedback forwarding for an identity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_email_identity#feedback_attributes SesEmailIdentity#feedback_attributes}

---

##### `mail_from_attributes`<sup>Optional</sup> <a name="mail_from_attributes" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfig.property.mailFromAttributes"></a>

```python
mail_from_attributes: SesEmailIdentityMailFromAttributes
```

- *Type:* <a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityMailFromAttributes">SesEmailIdentityMailFromAttributes</a>

Used to enable or disable the custom Mail-From domain configuration for an email identity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_email_identity#mail_from_attributes SesEmailIdentity#mail_from_attributes}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[SesEmailIdentityTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTags">SesEmailIdentityTags</a>]

The tags (keys and values) associated with the email identity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_email_identity#tags SesEmailIdentity#tags}

---

### SesEmailIdentityConfigurationSetAttributes <a name="SesEmailIdentityConfigurationSetAttributes" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfigurationSetAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfigurationSetAttributes.Initializer"></a>

```python
from cdktn_provider_awscc import ses_email_identity

sesEmailIdentity.SesEmailIdentityConfigurationSetAttributes(
  configuration_set_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfigurationSetAttributes.property.configurationSetName">configuration_set_name</a></code> | <code>str</code> | The configuration set to use by default when sending from this identity. |

---

##### `configuration_set_name`<sup>Optional</sup> <a name="configuration_set_name" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfigurationSetAttributes.property.configurationSetName"></a>

```python
configuration_set_name: str
```

- *Type:* str

The configuration set to use by default when sending from this identity.

Note that any configuration set defined in the email sending request takes precedence.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_email_identity#configuration_set_name SesEmailIdentity#configuration_set_name}

---

### SesEmailIdentityDkimAttributes <a name="SesEmailIdentityDkimAttributes" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimAttributes.Initializer"></a>

```python
from cdktn_provider_awscc import ses_email_identity

sesEmailIdentity.SesEmailIdentityDkimAttributes(
  signing_enabled: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimAttributes.property.signingEnabled">signing_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Sets the DKIM signing configuration for the identity. |

---

##### `signing_enabled`<sup>Optional</sup> <a name="signing_enabled" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimAttributes.property.signingEnabled"></a>

```python
signing_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Sets the DKIM signing configuration for the identity.

When you set this value true, then the messages that are sent from the identity are signed using DKIM. If you set this value to false, your messages are sent without DKIM signing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_email_identity#signing_enabled SesEmailIdentity#signing_enabled}

---

### SesEmailIdentityDkimSigningAttributes <a name="SesEmailIdentityDkimSigningAttributes" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributes.Initializer"></a>

```python
from cdktn_provider_awscc import ses_email_identity

sesEmailIdentity.SesEmailIdentityDkimSigningAttributes(
  domain_signing_private_key: str = None,
  domain_signing_selector: str = None,
  next_signing_key_length: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributes.property.domainSigningPrivateKey">domain_signing_private_key</a></code> | <code>str</code> | [Bring Your Own DKIM] A private key that's used to generate a DKIM signature. |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributes.property.domainSigningSelector">domain_signing_selector</a></code> | <code>str</code> | [Bring Your Own DKIM] A string that's used to identify a public key in the DNS configuration for a domain. |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributes.property.nextSigningKeyLength">next_signing_key_length</a></code> | <code>str</code> | [Easy DKIM] The key length of the future DKIM key pair to be generated. |

---

##### `domain_signing_private_key`<sup>Optional</sup> <a name="domain_signing_private_key" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributes.property.domainSigningPrivateKey"></a>

```python
domain_signing_private_key: str
```

- *Type:* str

[Bring Your Own DKIM] A private key that's used to generate a DKIM signature.

The private key must use 1024 or 2048-bit RSA encryption, and must be encoded using base64 encoding.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_email_identity#domain_signing_private_key SesEmailIdentity#domain_signing_private_key}

---

##### `domain_signing_selector`<sup>Optional</sup> <a name="domain_signing_selector" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributes.property.domainSigningSelector"></a>

```python
domain_signing_selector: str
```

- *Type:* str

[Bring Your Own DKIM] A string that's used to identify a public key in the DNS configuration for a domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_email_identity#domain_signing_selector SesEmailIdentity#domain_signing_selector}

---

##### `next_signing_key_length`<sup>Optional</sup> <a name="next_signing_key_length" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributes.property.nextSigningKeyLength"></a>

```python
next_signing_key_length: str
```

- *Type:* str

[Easy DKIM] The key length of the future DKIM key pair to be generated.

This can be changed at most once per day.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_email_identity#next_signing_key_length SesEmailIdentity#next_signing_key_length}

---

### SesEmailIdentityFeedbackAttributes <a name="SesEmailIdentityFeedbackAttributes" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityFeedbackAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityFeedbackAttributes.Initializer"></a>

```python
from cdktn_provider_awscc import ses_email_identity

sesEmailIdentity.SesEmailIdentityFeedbackAttributes(
  email_forwarding_enabled: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityFeedbackAttributes.property.emailForwardingEnabled">email_forwarding_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | If the value is true, you receive email notifications when bounce or complaint events occur. |

---

##### `email_forwarding_enabled`<sup>Optional</sup> <a name="email_forwarding_enabled" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityFeedbackAttributes.property.emailForwardingEnabled"></a>

```python
email_forwarding_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

If the value is true, you receive email notifications when bounce or complaint events occur.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_email_identity#email_forwarding_enabled SesEmailIdentity#email_forwarding_enabled}

---

### SesEmailIdentityMailFromAttributes <a name="SesEmailIdentityMailFromAttributes" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityMailFromAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityMailFromAttributes.Initializer"></a>

```python
from cdktn_provider_awscc import ses_email_identity

sesEmailIdentity.SesEmailIdentityMailFromAttributes(
  behavior_on_mx_failure: str = None,
  mail_from_domain: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityMailFromAttributes.property.behaviorOnMxFailure">behavior_on_mx_failure</a></code> | <code>str</code> | The action to take if the required MX record isn't found when you send an email. |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityMailFromAttributes.property.mailFromDomain">mail_from_domain</a></code> | <code>str</code> | The custom MAIL FROM domain that you want the verified identity to use. |

---

##### `behavior_on_mx_failure`<sup>Optional</sup> <a name="behavior_on_mx_failure" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityMailFromAttributes.property.behaviorOnMxFailure"></a>

```python
behavior_on_mx_failure: str
```

- *Type:* str

The action to take if the required MX record isn't found when you send an email.

When you set this value to UseDefaultValue , the mail is sent using amazonses.com as the MAIL FROM domain. When you set this value to RejectMessage , the Amazon SES API v2 returns a MailFromDomainNotVerified error, and doesn't attempt to deliver the email.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_email_identity#behavior_on_mx_failure SesEmailIdentity#behavior_on_mx_failure}

---

##### `mail_from_domain`<sup>Optional</sup> <a name="mail_from_domain" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityMailFromAttributes.property.mailFromDomain"></a>

```python
mail_from_domain: str
```

- *Type:* str

The custom MAIL FROM domain that you want the verified identity to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_email_identity#mail_from_domain SesEmailIdentity#mail_from_domain}

---

### SesEmailIdentityTags <a name="SesEmailIdentityTags" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTags.Initializer"></a>

```python
from cdktn_provider_awscc import ses_email_identity

sesEmailIdentity.SesEmailIdentityTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTags.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_email_identity#key SesEmailIdentity#key}. |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTags.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_email_identity#value SesEmailIdentity#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTags.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_email_identity#key SesEmailIdentity#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTags.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_email_identity#value SesEmailIdentity#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### SesEmailIdentityConfigurationSetAttributesOutputReference <a name="SesEmailIdentityConfigurationSetAttributesOutputReference" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfigurationSetAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfigurationSetAttributesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import ses_email_identity

sesEmailIdentity.SesEmailIdentityConfigurationSetAttributesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfigurationSetAttributesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfigurationSetAttributesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfigurationSetAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfigurationSetAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfigurationSetAttributesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfigurationSetAttributesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfigurationSetAttributesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfigurationSetAttributesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfigurationSetAttributesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfigurationSetAttributesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfigurationSetAttributesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfigurationSetAttributesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfigurationSetAttributesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfigurationSetAttributesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfigurationSetAttributesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfigurationSetAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfigurationSetAttributesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfigurationSetAttributesOutputReference.resetConfigurationSetName">reset_configuration_set_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfigurationSetAttributesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfigurationSetAttributesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfigurationSetAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfigurationSetAttributesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfigurationSetAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfigurationSetAttributesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfigurationSetAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfigurationSetAttributesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfigurationSetAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfigurationSetAttributesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfigurationSetAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfigurationSetAttributesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfigurationSetAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfigurationSetAttributesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfigurationSetAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfigurationSetAttributesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfigurationSetAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfigurationSetAttributesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfigurationSetAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfigurationSetAttributesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfigurationSetAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfigurationSetAttributesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfigurationSetAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfigurationSetAttributesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_configuration_set_name` <a name="reset_configuration_set_name" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfigurationSetAttributesOutputReference.resetConfigurationSetName"></a>

```python
def reset_configuration_set_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfigurationSetAttributesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfigurationSetAttributesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfigurationSetAttributesOutputReference.property.configurationSetNameInput">configuration_set_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfigurationSetAttributesOutputReference.property.configurationSetName">configuration_set_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfigurationSetAttributesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfigurationSetAttributes">SesEmailIdentityConfigurationSetAttributes</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfigurationSetAttributesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfigurationSetAttributesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `configuration_set_name_input`<sup>Optional</sup> <a name="configuration_set_name_input" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfigurationSetAttributesOutputReference.property.configurationSetNameInput"></a>

```python
configuration_set_name_input: str
```

- *Type:* str

---

##### `configuration_set_name`<sup>Required</sup> <a name="configuration_set_name" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfigurationSetAttributesOutputReference.property.configurationSetName"></a>

```python
configuration_set_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfigurationSetAttributesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SesEmailIdentityConfigurationSetAttributes
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfigurationSetAttributes">SesEmailIdentityConfigurationSetAttributes</a>

---


### SesEmailIdentityDkimAttributesOutputReference <a name="SesEmailIdentityDkimAttributesOutputReference" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimAttributesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import ses_email_identity

sesEmailIdentity.SesEmailIdentityDkimAttributesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimAttributesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimAttributesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimAttributesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimAttributesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimAttributesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimAttributesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimAttributesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimAttributesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimAttributesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimAttributesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimAttributesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimAttributesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimAttributesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimAttributesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimAttributesOutputReference.resetSigningEnabled">reset_signing_enabled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimAttributesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimAttributesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimAttributesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimAttributesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimAttributesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimAttributesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimAttributesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimAttributesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimAttributesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimAttributesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimAttributesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimAttributesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimAttributesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_signing_enabled` <a name="reset_signing_enabled" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimAttributesOutputReference.resetSigningEnabled"></a>

```python
def reset_signing_enabled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimAttributesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimAttributesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimAttributesOutputReference.property.signingEnabledInput">signing_enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimAttributesOutputReference.property.signingEnabled">signing_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimAttributesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimAttributes">SesEmailIdentityDkimAttributes</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimAttributesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimAttributesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `signing_enabled_input`<sup>Optional</sup> <a name="signing_enabled_input" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimAttributesOutputReference.property.signingEnabledInput"></a>

```python
signing_enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `signing_enabled`<sup>Required</sup> <a name="signing_enabled" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimAttributesOutputReference.property.signingEnabled"></a>

```python
signing_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimAttributesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SesEmailIdentityDkimAttributes
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimAttributes">SesEmailIdentityDkimAttributes</a>

---


### SesEmailIdentityDkimSigningAttributesOutputReference <a name="SesEmailIdentityDkimSigningAttributesOutputReference" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import ses_email_identity

sesEmailIdentity.SesEmailIdentityDkimSigningAttributesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributesOutputReference.resetDomainSigningPrivateKey">reset_domain_signing_private_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributesOutputReference.resetDomainSigningSelector">reset_domain_signing_selector</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributesOutputReference.resetNextSigningKeyLength">reset_next_signing_key_length</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_domain_signing_private_key` <a name="reset_domain_signing_private_key" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributesOutputReference.resetDomainSigningPrivateKey"></a>

```python
def reset_domain_signing_private_key() -> None
```

##### `reset_domain_signing_selector` <a name="reset_domain_signing_selector" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributesOutputReference.resetDomainSigningSelector"></a>

```python
def reset_domain_signing_selector() -> None
```

##### `reset_next_signing_key_length` <a name="reset_next_signing_key_length" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributesOutputReference.resetNextSigningKeyLength"></a>

```python
def reset_next_signing_key_length() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributesOutputReference.property.domainSigningPrivateKeyInput">domain_signing_private_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributesOutputReference.property.domainSigningSelectorInput">domain_signing_selector_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributesOutputReference.property.nextSigningKeyLengthInput">next_signing_key_length_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributesOutputReference.property.domainSigningPrivateKey">domain_signing_private_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributesOutputReference.property.domainSigningSelector">domain_signing_selector</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributesOutputReference.property.nextSigningKeyLength">next_signing_key_length</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributes">SesEmailIdentityDkimSigningAttributes</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `domain_signing_private_key_input`<sup>Optional</sup> <a name="domain_signing_private_key_input" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributesOutputReference.property.domainSigningPrivateKeyInput"></a>

```python
domain_signing_private_key_input: str
```

- *Type:* str

---

##### `domain_signing_selector_input`<sup>Optional</sup> <a name="domain_signing_selector_input" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributesOutputReference.property.domainSigningSelectorInput"></a>

```python
domain_signing_selector_input: str
```

- *Type:* str

---

##### `next_signing_key_length_input`<sup>Optional</sup> <a name="next_signing_key_length_input" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributesOutputReference.property.nextSigningKeyLengthInput"></a>

```python
next_signing_key_length_input: str
```

- *Type:* str

---

##### `domain_signing_private_key`<sup>Required</sup> <a name="domain_signing_private_key" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributesOutputReference.property.domainSigningPrivateKey"></a>

```python
domain_signing_private_key: str
```

- *Type:* str

---

##### `domain_signing_selector`<sup>Required</sup> <a name="domain_signing_selector" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributesOutputReference.property.domainSigningSelector"></a>

```python
domain_signing_selector: str
```

- *Type:* str

---

##### `next_signing_key_length`<sup>Required</sup> <a name="next_signing_key_length" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributesOutputReference.property.nextSigningKeyLength"></a>

```python
next_signing_key_length: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SesEmailIdentityDkimSigningAttributes
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributes">SesEmailIdentityDkimSigningAttributes</a>

---


### SesEmailIdentityFeedbackAttributesOutputReference <a name="SesEmailIdentityFeedbackAttributesOutputReference" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityFeedbackAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityFeedbackAttributesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import ses_email_identity

sesEmailIdentity.SesEmailIdentityFeedbackAttributesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityFeedbackAttributesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityFeedbackAttributesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityFeedbackAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityFeedbackAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityFeedbackAttributesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityFeedbackAttributesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityFeedbackAttributesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityFeedbackAttributesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityFeedbackAttributesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityFeedbackAttributesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityFeedbackAttributesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityFeedbackAttributesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityFeedbackAttributesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityFeedbackAttributesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityFeedbackAttributesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityFeedbackAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityFeedbackAttributesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityFeedbackAttributesOutputReference.resetEmailForwardingEnabled">reset_email_forwarding_enabled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityFeedbackAttributesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityFeedbackAttributesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityFeedbackAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityFeedbackAttributesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityFeedbackAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityFeedbackAttributesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityFeedbackAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityFeedbackAttributesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityFeedbackAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityFeedbackAttributesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityFeedbackAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityFeedbackAttributesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityFeedbackAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityFeedbackAttributesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityFeedbackAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityFeedbackAttributesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityFeedbackAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityFeedbackAttributesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityFeedbackAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityFeedbackAttributesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityFeedbackAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityFeedbackAttributesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityFeedbackAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityFeedbackAttributesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_email_forwarding_enabled` <a name="reset_email_forwarding_enabled" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityFeedbackAttributesOutputReference.resetEmailForwardingEnabled"></a>

```python
def reset_email_forwarding_enabled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityFeedbackAttributesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityFeedbackAttributesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityFeedbackAttributesOutputReference.property.emailForwardingEnabledInput">email_forwarding_enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityFeedbackAttributesOutputReference.property.emailForwardingEnabled">email_forwarding_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityFeedbackAttributesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityFeedbackAttributes">SesEmailIdentityFeedbackAttributes</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityFeedbackAttributesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityFeedbackAttributesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `email_forwarding_enabled_input`<sup>Optional</sup> <a name="email_forwarding_enabled_input" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityFeedbackAttributesOutputReference.property.emailForwardingEnabledInput"></a>

```python
email_forwarding_enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `email_forwarding_enabled`<sup>Required</sup> <a name="email_forwarding_enabled" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityFeedbackAttributesOutputReference.property.emailForwardingEnabled"></a>

```python
email_forwarding_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityFeedbackAttributesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SesEmailIdentityFeedbackAttributes
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityFeedbackAttributes">SesEmailIdentityFeedbackAttributes</a>

---


### SesEmailIdentityMailFromAttributesOutputReference <a name="SesEmailIdentityMailFromAttributesOutputReference" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityMailFromAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityMailFromAttributesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import ses_email_identity

sesEmailIdentity.SesEmailIdentityMailFromAttributesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityMailFromAttributesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityMailFromAttributesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityMailFromAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityMailFromAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityMailFromAttributesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityMailFromAttributesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityMailFromAttributesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityMailFromAttributesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityMailFromAttributesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityMailFromAttributesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityMailFromAttributesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityMailFromAttributesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityMailFromAttributesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityMailFromAttributesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityMailFromAttributesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityMailFromAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityMailFromAttributesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityMailFromAttributesOutputReference.resetBehaviorOnMxFailure">reset_behavior_on_mx_failure</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityMailFromAttributesOutputReference.resetMailFromDomain">reset_mail_from_domain</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityMailFromAttributesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityMailFromAttributesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityMailFromAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityMailFromAttributesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityMailFromAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityMailFromAttributesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityMailFromAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityMailFromAttributesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityMailFromAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityMailFromAttributesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityMailFromAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityMailFromAttributesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityMailFromAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityMailFromAttributesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityMailFromAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityMailFromAttributesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityMailFromAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityMailFromAttributesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityMailFromAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityMailFromAttributesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityMailFromAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityMailFromAttributesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityMailFromAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityMailFromAttributesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_behavior_on_mx_failure` <a name="reset_behavior_on_mx_failure" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityMailFromAttributesOutputReference.resetBehaviorOnMxFailure"></a>

```python
def reset_behavior_on_mx_failure() -> None
```

##### `reset_mail_from_domain` <a name="reset_mail_from_domain" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityMailFromAttributesOutputReference.resetMailFromDomain"></a>

```python
def reset_mail_from_domain() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityMailFromAttributesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityMailFromAttributesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityMailFromAttributesOutputReference.property.behaviorOnMxFailureInput">behavior_on_mx_failure_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityMailFromAttributesOutputReference.property.mailFromDomainInput">mail_from_domain_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityMailFromAttributesOutputReference.property.behaviorOnMxFailure">behavior_on_mx_failure</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityMailFromAttributesOutputReference.property.mailFromDomain">mail_from_domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityMailFromAttributesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityMailFromAttributes">SesEmailIdentityMailFromAttributes</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityMailFromAttributesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityMailFromAttributesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `behavior_on_mx_failure_input`<sup>Optional</sup> <a name="behavior_on_mx_failure_input" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityMailFromAttributesOutputReference.property.behaviorOnMxFailureInput"></a>

```python
behavior_on_mx_failure_input: str
```

- *Type:* str

---

##### `mail_from_domain_input`<sup>Optional</sup> <a name="mail_from_domain_input" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityMailFromAttributesOutputReference.property.mailFromDomainInput"></a>

```python
mail_from_domain_input: str
```

- *Type:* str

---

##### `behavior_on_mx_failure`<sup>Required</sup> <a name="behavior_on_mx_failure" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityMailFromAttributesOutputReference.property.behaviorOnMxFailure"></a>

```python
behavior_on_mx_failure: str
```

- *Type:* str

---

##### `mail_from_domain`<sup>Required</sup> <a name="mail_from_domain" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityMailFromAttributesOutputReference.property.mailFromDomain"></a>

```python
mail_from_domain: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityMailFromAttributesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SesEmailIdentityMailFromAttributes
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityMailFromAttributes">SesEmailIdentityMailFromAttributes</a>

---


### SesEmailIdentityTagsList <a name="SesEmailIdentityTagsList" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import ses_email_identity

sesEmailIdentity.SesEmailIdentityTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SesEmailIdentityTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTags">SesEmailIdentityTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[SesEmailIdentityTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTags">SesEmailIdentityTags</a>]

---


### SesEmailIdentityTagsOutputReference <a name="SesEmailIdentityTagsOutputReference" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import ses_email_identity

sesEmailIdentity.SesEmailIdentityTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTags">SesEmailIdentityTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SesEmailIdentityTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTags">SesEmailIdentityTags</a>

---



