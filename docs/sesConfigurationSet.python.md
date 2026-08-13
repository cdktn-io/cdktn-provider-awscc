# `sesConfigurationSet` Submodule <a name="`sesConfigurationSet` Submodule" id="@cdktn/provider-awscc.sesConfigurationSet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SesConfigurationSet <a name="SesConfigurationSet" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_configuration_set awscc_ses_configuration_set}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.Initializer"></a>

```python
from cdktn_provider_awscc import ses_configuration_set

sesConfigurationSet.SesConfigurationSet(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  archiving_options: SesConfigurationSetArchivingOptions = None,
  delivery_options: SesConfigurationSetDeliveryOptions = None,
  name: str = None,
  reputation_options: SesConfigurationSetReputationOptions = None,
  sending_options: SesConfigurationSetSendingOptions = None,
  suppression_options: SesConfigurationSetSuppressionOptions = None,
  tags: IResolvable | typing.List[SesConfigurationSetTags] = None,
  tracking_options: SesConfigurationSetTrackingOptions = None,
  vdm_options: SesConfigurationSetVdmOptions = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.Initializer.parameter.archivingOptions">archiving_options</a></code> | <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetArchivingOptions">SesConfigurationSetArchivingOptions</a></code> | An object that defines a MailManager archive that is used to preserve emails that you send using the configuration set. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.Initializer.parameter.deliveryOptions">delivery_options</a></code> | <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptions">SesConfigurationSetDeliveryOptions</a></code> | An object that defines the dedicated IP pool that is used to send emails that you send using the configuration set. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the configuration set. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.Initializer.parameter.reputationOptions">reputation_options</a></code> | <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetReputationOptions">SesConfigurationSetReputationOptions</a></code> | An object that defines whether or not Amazon SES collects reputation metrics for the emails that you send that use the configuration set. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.Initializer.parameter.sendingOptions">sending_options</a></code> | <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSendingOptions">SesConfigurationSetSendingOptions</a></code> | An object that defines whether or not Amazon SES can send email that you send using the configuration set. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.Initializer.parameter.suppressionOptions">suppression_options</a></code> | <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptions">SesConfigurationSetSuppressionOptions</a></code> | An object that contains information about the suppression list preferences for your account. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTags">SesConfigurationSetTags</a>]</code> | The tags (keys and values) associated with the contact list. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.Initializer.parameter.trackingOptions">tracking_options</a></code> | <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTrackingOptions">SesConfigurationSetTrackingOptions</a></code> | An object that defines the open and click tracking options for emails that you send using the configuration set. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.Initializer.parameter.vdmOptions">vdm_options</a></code> | <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptions">SesConfigurationSetVdmOptions</a></code> | An object that contains Virtual Deliverability Manager (VDM) settings for this configuration set. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `archiving_options`<sup>Optional</sup> <a name="archiving_options" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.Initializer.parameter.archivingOptions"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetArchivingOptions">SesConfigurationSetArchivingOptions</a>

An object that defines a MailManager archive that is used to preserve emails that you send using the configuration set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_configuration_set#archiving_options SesConfigurationSet#archiving_options}

---

##### `delivery_options`<sup>Optional</sup> <a name="delivery_options" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.Initializer.parameter.deliveryOptions"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptions">SesConfigurationSetDeliveryOptions</a>

An object that defines the dedicated IP pool that is used to send emails that you send using the configuration set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_configuration_set#delivery_options SesConfigurationSet#delivery_options}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.Initializer.parameter.name"></a>

- *Type:* str

The name of the configuration set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_configuration_set#name SesConfigurationSet#name}

---

##### `reputation_options`<sup>Optional</sup> <a name="reputation_options" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.Initializer.parameter.reputationOptions"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetReputationOptions">SesConfigurationSetReputationOptions</a>

An object that defines whether or not Amazon SES collects reputation metrics for the emails that you send that use the configuration set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_configuration_set#reputation_options SesConfigurationSet#reputation_options}

---

##### `sending_options`<sup>Optional</sup> <a name="sending_options" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.Initializer.parameter.sendingOptions"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSendingOptions">SesConfigurationSetSendingOptions</a>

An object that defines whether or not Amazon SES can send email that you send using the configuration set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_configuration_set#sending_options SesConfigurationSet#sending_options}

---

##### `suppression_options`<sup>Optional</sup> <a name="suppression_options" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.Initializer.parameter.suppressionOptions"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptions">SesConfigurationSetSuppressionOptions</a>

An object that contains information about the suppression list preferences for your account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_configuration_set#suppression_options SesConfigurationSet#suppression_options}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTags">SesConfigurationSetTags</a>]

The tags (keys and values) associated with the contact list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_configuration_set#tags SesConfigurationSet#tags}

---

##### `tracking_options`<sup>Optional</sup> <a name="tracking_options" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.Initializer.parameter.trackingOptions"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTrackingOptions">SesConfigurationSetTrackingOptions</a>

An object that defines the open and click tracking options for emails that you send using the configuration set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_configuration_set#tracking_options SesConfigurationSet#tracking_options}

---

##### `vdm_options`<sup>Optional</sup> <a name="vdm_options" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.Initializer.parameter.vdmOptions"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptions">SesConfigurationSetVdmOptions</a>

An object that contains Virtual Deliverability Manager (VDM) settings for this configuration set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_configuration_set#vdm_options SesConfigurationSet#vdm_options}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.putArchivingOptions">put_archiving_options</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.putDeliveryOptions">put_delivery_options</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.putReputationOptions">put_reputation_options</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.putSendingOptions">put_sending_options</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.putSuppressionOptions">put_suppression_options</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.putTrackingOptions">put_tracking_options</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.putVdmOptions">put_vdm_options</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.resetArchivingOptions">reset_archiving_options</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.resetDeliveryOptions">reset_delivery_options</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.resetReputationOptions">reset_reputation_options</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.resetSendingOptions">reset_sending_options</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.resetSuppressionOptions">reset_suppression_options</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.resetTrackingOptions">reset_tracking_options</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.resetVdmOptions">reset_vdm_options</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_archiving_options` <a name="put_archiving_options" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.putArchivingOptions"></a>

```python
def put_archiving_options(
  archive_arn: str = None
) -> None
```

###### `archive_arn`<sup>Optional</sup> <a name="archive_arn" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.putArchivingOptions.parameter.archiveArn"></a>

- *Type:* str

The ARN of the MailManager archive to associate with the configuration set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_configuration_set#archive_arn SesConfigurationSet#archive_arn}

---

##### `put_delivery_options` <a name="put_delivery_options" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.putDeliveryOptions"></a>

```python
def put_delivery_options(
  max_delivery_seconds: typing.Union[int, float] = None,
  sending_pool_name: str = None,
  tls_policy: str = None
) -> None
```

###### `max_delivery_seconds`<sup>Optional</sup> <a name="max_delivery_seconds" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.putDeliveryOptions.parameter.maxDeliverySeconds"></a>

- *Type:* typing.Union[int, float]

Specifies the maximum time until which SES will retry sending emails.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_configuration_set#max_delivery_seconds SesConfigurationSet#max_delivery_seconds}

---

###### `sending_pool_name`<sup>Optional</sup> <a name="sending_pool_name" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.putDeliveryOptions.parameter.sendingPoolName"></a>

- *Type:* str

The name of the dedicated IP pool to associate with the configuration set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_configuration_set#sending_pool_name SesConfigurationSet#sending_pool_name}

---

###### `tls_policy`<sup>Optional</sup> <a name="tls_policy" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.putDeliveryOptions.parameter.tlsPolicy"></a>

- *Type:* str

Specifies whether messages that use the configuration set are required to use Transport Layer Security (TLS).

If the value is Require , messages are only delivered if a TLS connection can be established. If the value is Optional , messages can be delivered in plain text if a TLS connection can't be established.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_configuration_set#tls_policy SesConfigurationSet#tls_policy}

---

##### `put_reputation_options` <a name="put_reputation_options" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.putReputationOptions"></a>

```python
def put_reputation_options(
  reputation_metrics_enabled: bool | IResolvable = None
) -> None
```

###### `reputation_metrics_enabled`<sup>Optional</sup> <a name="reputation_metrics_enabled" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.putReputationOptions.parameter.reputationMetricsEnabled"></a>

- *Type:* bool | cdktn.IResolvable

If true , tracking of reputation metrics is enabled for the configuration set.

If false , tracking of reputation metrics is disabled for the configuration set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_configuration_set#reputation_metrics_enabled SesConfigurationSet#reputation_metrics_enabled}

---

##### `put_sending_options` <a name="put_sending_options" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.putSendingOptions"></a>

```python
def put_sending_options(
  sending_enabled: bool | IResolvable = None
) -> None
```

###### `sending_enabled`<sup>Optional</sup> <a name="sending_enabled" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.putSendingOptions.parameter.sendingEnabled"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_configuration_set#sending_enabled SesConfigurationSet#sending_enabled}.

---

##### `put_suppression_options` <a name="put_suppression_options" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.putSuppressionOptions"></a>

```python
def put_suppression_options(
  suppressed_reasons: typing.List[str] = None,
  validation_options: SesConfigurationSetSuppressionOptionsValidationOptions = None
) -> None
```

###### `suppressed_reasons`<sup>Optional</sup> <a name="suppressed_reasons" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.putSuppressionOptions.parameter.suppressedReasons"></a>

- *Type:* typing.List[str]

A list that contains the reasons that email addresses are automatically added to the suppression list for your account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_configuration_set#suppressed_reasons SesConfigurationSet#suppressed_reasons}

---

###### `validation_options`<sup>Optional</sup> <a name="validation_options" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.putSuppressionOptions.parameter.validationOptions"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptions">SesConfigurationSetSuppressionOptionsValidationOptions</a>

An object that contains information about the validation options for your account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_configuration_set#validation_options SesConfigurationSet#validation_options}

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[SesConfigurationSetTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTags">SesConfigurationSetTags</a>]

---

##### `put_tracking_options` <a name="put_tracking_options" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.putTrackingOptions"></a>

```python
def put_tracking_options(
  custom_redirect_domain: str = None,
  https_policy: str = None
) -> None
```

###### `custom_redirect_domain`<sup>Optional</sup> <a name="custom_redirect_domain" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.putTrackingOptions.parameter.customRedirectDomain"></a>

- *Type:* str

The domain to use for tracking open and click events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_configuration_set#custom_redirect_domain SesConfigurationSet#custom_redirect_domain}

---

###### `https_policy`<sup>Optional</sup> <a name="https_policy" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.putTrackingOptions.parameter.httpsPolicy"></a>

- *Type:* str

The https policy to use for tracking open and click events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_configuration_set#https_policy SesConfigurationSet#https_policy}

---

##### `put_vdm_options` <a name="put_vdm_options" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.putVdmOptions"></a>

```python
def put_vdm_options(
  dashboard_options: SesConfigurationSetVdmOptionsDashboardOptions = None,
  guardian_options: SesConfigurationSetVdmOptionsGuardianOptions = None
) -> None
```

###### `dashboard_options`<sup>Optional</sup> <a name="dashboard_options" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.putVdmOptions.parameter.dashboardOptions"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsDashboardOptions">SesConfigurationSetVdmOptionsDashboardOptions</a>

Preferences regarding the Dashboard feature.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_configuration_set#dashboard_options SesConfigurationSet#dashboard_options}

---

###### `guardian_options`<sup>Optional</sup> <a name="guardian_options" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.putVdmOptions.parameter.guardianOptions"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsGuardianOptions">SesConfigurationSetVdmOptionsGuardianOptions</a>

Preferences regarding the Guardian feature.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_configuration_set#guardian_options SesConfigurationSet#guardian_options}

---

##### `reset_archiving_options` <a name="reset_archiving_options" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.resetArchivingOptions"></a>

```python
def reset_archiving_options() -> None
```

##### `reset_delivery_options` <a name="reset_delivery_options" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.resetDeliveryOptions"></a>

```python
def reset_delivery_options() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_reputation_options` <a name="reset_reputation_options" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.resetReputationOptions"></a>

```python
def reset_reputation_options() -> None
```

##### `reset_sending_options` <a name="reset_sending_options" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.resetSendingOptions"></a>

```python
def reset_sending_options() -> None
```

##### `reset_suppression_options` <a name="reset_suppression_options" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.resetSuppressionOptions"></a>

```python
def reset_suppression_options() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_tracking_options` <a name="reset_tracking_options" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.resetTrackingOptions"></a>

```python
def reset_tracking_options() -> None
```

##### `reset_vdm_options` <a name="reset_vdm_options" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.resetVdmOptions"></a>

```python
def reset_vdm_options() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a SesConfigurationSet resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.isConstruct"></a>

```python
from cdktn_provider_awscc import ses_configuration_set

sesConfigurationSet.SesConfigurationSet.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.isTerraformElement"></a>

```python
from cdktn_provider_awscc import ses_configuration_set

sesConfigurationSet.SesConfigurationSet.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.isTerraformResource"></a>

```python
from cdktn_provider_awscc import ses_configuration_set

sesConfigurationSet.SesConfigurationSet.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import ses_configuration_set

sesConfigurationSet.SesConfigurationSet.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a SesConfigurationSet resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the SesConfigurationSet to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing SesConfigurationSet that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_configuration_set#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the SesConfigurationSet to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.property.archivingOptions">archiving_options</a></code> | <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetArchivingOptionsOutputReference">SesConfigurationSetArchivingOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.property.deliveryOptions">delivery_options</a></code> | <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference">SesConfigurationSetDeliveryOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.property.reputationOptions">reputation_options</a></code> | <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetReputationOptionsOutputReference">SesConfigurationSetReputationOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.property.sendingOptions">sending_options</a></code> | <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSendingOptionsOutputReference">SesConfigurationSetSendingOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.property.suppressionOptions">suppression_options</a></code> | <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsOutputReference">SesConfigurationSetSuppressionOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsList">SesConfigurationSetTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.property.trackingOptions">tracking_options</a></code> | <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference">SesConfigurationSetTrackingOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.property.vdmOptions">vdm_options</a></code> | <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsOutputReference">SesConfigurationSetVdmOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.property.archivingOptionsInput">archiving_options_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetArchivingOptions">SesConfigurationSetArchivingOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.property.deliveryOptionsInput">delivery_options_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptions">SesConfigurationSetDeliveryOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.property.reputationOptionsInput">reputation_options_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetReputationOptions">SesConfigurationSetReputationOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.property.sendingOptionsInput">sending_options_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSendingOptions">SesConfigurationSetSendingOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.property.suppressionOptionsInput">suppression_options_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptions">SesConfigurationSetSuppressionOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTags">SesConfigurationSetTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.property.trackingOptionsInput">tracking_options_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTrackingOptions">SesConfigurationSetTrackingOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.property.vdmOptionsInput">vdm_options_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptions">SesConfigurationSetVdmOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.property.name">name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `archiving_options`<sup>Required</sup> <a name="archiving_options" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.property.archivingOptions"></a>

```python
archiving_options: SesConfigurationSetArchivingOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetArchivingOptionsOutputReference">SesConfigurationSetArchivingOptionsOutputReference</a>

---

##### `delivery_options`<sup>Required</sup> <a name="delivery_options" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.property.deliveryOptions"></a>

```python
delivery_options: SesConfigurationSetDeliveryOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference">SesConfigurationSetDeliveryOptionsOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `reputation_options`<sup>Required</sup> <a name="reputation_options" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.property.reputationOptions"></a>

```python
reputation_options: SesConfigurationSetReputationOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetReputationOptionsOutputReference">SesConfigurationSetReputationOptionsOutputReference</a>

---

##### `sending_options`<sup>Required</sup> <a name="sending_options" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.property.sendingOptions"></a>

```python
sending_options: SesConfigurationSetSendingOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSendingOptionsOutputReference">SesConfigurationSetSendingOptionsOutputReference</a>

---

##### `suppression_options`<sup>Required</sup> <a name="suppression_options" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.property.suppressionOptions"></a>

```python
suppression_options: SesConfigurationSetSuppressionOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsOutputReference">SesConfigurationSetSuppressionOptionsOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.property.tags"></a>

```python
tags: SesConfigurationSetTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsList">SesConfigurationSetTagsList</a>

---

##### `tracking_options`<sup>Required</sup> <a name="tracking_options" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.property.trackingOptions"></a>

```python
tracking_options: SesConfigurationSetTrackingOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference">SesConfigurationSetTrackingOptionsOutputReference</a>

---

##### `vdm_options`<sup>Required</sup> <a name="vdm_options" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.property.vdmOptions"></a>

```python
vdm_options: SesConfigurationSetVdmOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsOutputReference">SesConfigurationSetVdmOptionsOutputReference</a>

---

##### `archiving_options_input`<sup>Optional</sup> <a name="archiving_options_input" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.property.archivingOptionsInput"></a>

```python
archiving_options_input: IResolvable | SesConfigurationSetArchivingOptions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetArchivingOptions">SesConfigurationSetArchivingOptions</a>

---

##### `delivery_options_input`<sup>Optional</sup> <a name="delivery_options_input" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.property.deliveryOptionsInput"></a>

```python
delivery_options_input: IResolvable | SesConfigurationSetDeliveryOptions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptions">SesConfigurationSetDeliveryOptions</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `reputation_options_input`<sup>Optional</sup> <a name="reputation_options_input" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.property.reputationOptionsInput"></a>

```python
reputation_options_input: IResolvable | SesConfigurationSetReputationOptions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetReputationOptions">SesConfigurationSetReputationOptions</a>

---

##### `sending_options_input`<sup>Optional</sup> <a name="sending_options_input" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.property.sendingOptionsInput"></a>

```python
sending_options_input: IResolvable | SesConfigurationSetSendingOptions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSendingOptions">SesConfigurationSetSendingOptions</a>

---

##### `suppression_options_input`<sup>Optional</sup> <a name="suppression_options_input" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.property.suppressionOptionsInput"></a>

```python
suppression_options_input: IResolvable | SesConfigurationSetSuppressionOptions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptions">SesConfigurationSetSuppressionOptions</a>

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[SesConfigurationSetTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTags">SesConfigurationSetTags</a>]

---

##### `tracking_options_input`<sup>Optional</sup> <a name="tracking_options_input" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.property.trackingOptionsInput"></a>

```python
tracking_options_input: IResolvable | SesConfigurationSetTrackingOptions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTrackingOptions">SesConfigurationSetTrackingOptions</a>

---

##### `vdm_options_input`<sup>Optional</sup> <a name="vdm_options_input" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.property.vdmOptionsInput"></a>

```python
vdm_options_input: IResolvable | SesConfigurationSetVdmOptions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptions">SesConfigurationSetVdmOptions</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.property.name"></a>

```python
name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### SesConfigurationSetArchivingOptions <a name="SesConfigurationSetArchivingOptions" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetArchivingOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetArchivingOptions.Initializer"></a>

```python
from cdktn_provider_awscc import ses_configuration_set

sesConfigurationSet.SesConfigurationSetArchivingOptions(
  archive_arn: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetArchivingOptions.property.archiveArn">archive_arn</a></code> | <code>str</code> | The ARN of the MailManager archive to associate with the configuration set. |

---

##### `archive_arn`<sup>Optional</sup> <a name="archive_arn" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetArchivingOptions.property.archiveArn"></a>

```python
archive_arn: str
```

- *Type:* str

The ARN of the MailManager archive to associate with the configuration set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_configuration_set#archive_arn SesConfigurationSet#archive_arn}

---

### SesConfigurationSetConfig <a name="SesConfigurationSetConfig" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetConfig.Initializer"></a>

```python
from cdktn_provider_awscc import ses_configuration_set

sesConfigurationSet.SesConfigurationSetConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  archiving_options: SesConfigurationSetArchivingOptions = None,
  delivery_options: SesConfigurationSetDeliveryOptions = None,
  name: str = None,
  reputation_options: SesConfigurationSetReputationOptions = None,
  sending_options: SesConfigurationSetSendingOptions = None,
  suppression_options: SesConfigurationSetSuppressionOptions = None,
  tags: IResolvable | typing.List[SesConfigurationSetTags] = None,
  tracking_options: SesConfigurationSetTrackingOptions = None,
  vdm_options: SesConfigurationSetVdmOptions = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetConfig.property.archivingOptions">archiving_options</a></code> | <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetArchivingOptions">SesConfigurationSetArchivingOptions</a></code> | An object that defines a MailManager archive that is used to preserve emails that you send using the configuration set. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetConfig.property.deliveryOptions">delivery_options</a></code> | <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptions">SesConfigurationSetDeliveryOptions</a></code> | An object that defines the dedicated IP pool that is used to send emails that you send using the configuration set. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetConfig.property.name">name</a></code> | <code>str</code> | The name of the configuration set. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetConfig.property.reputationOptions">reputation_options</a></code> | <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetReputationOptions">SesConfigurationSetReputationOptions</a></code> | An object that defines whether or not Amazon SES collects reputation metrics for the emails that you send that use the configuration set. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetConfig.property.sendingOptions">sending_options</a></code> | <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSendingOptions">SesConfigurationSetSendingOptions</a></code> | An object that defines whether or not Amazon SES can send email that you send using the configuration set. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetConfig.property.suppressionOptions">suppression_options</a></code> | <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptions">SesConfigurationSetSuppressionOptions</a></code> | An object that contains information about the suppression list preferences for your account. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTags">SesConfigurationSetTags</a>]</code> | The tags (keys and values) associated with the contact list. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetConfig.property.trackingOptions">tracking_options</a></code> | <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTrackingOptions">SesConfigurationSetTrackingOptions</a></code> | An object that defines the open and click tracking options for emails that you send using the configuration set. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetConfig.property.vdmOptions">vdm_options</a></code> | <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptions">SesConfigurationSetVdmOptions</a></code> | An object that contains Virtual Deliverability Manager (VDM) settings for this configuration set. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `archiving_options`<sup>Optional</sup> <a name="archiving_options" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetConfig.property.archivingOptions"></a>

```python
archiving_options: SesConfigurationSetArchivingOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetArchivingOptions">SesConfigurationSetArchivingOptions</a>

An object that defines a MailManager archive that is used to preserve emails that you send using the configuration set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_configuration_set#archiving_options SesConfigurationSet#archiving_options}

---

##### `delivery_options`<sup>Optional</sup> <a name="delivery_options" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetConfig.property.deliveryOptions"></a>

```python
delivery_options: SesConfigurationSetDeliveryOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptions">SesConfigurationSetDeliveryOptions</a>

An object that defines the dedicated IP pool that is used to send emails that you send using the configuration set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_configuration_set#delivery_options SesConfigurationSet#delivery_options}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the configuration set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_configuration_set#name SesConfigurationSet#name}

---

##### `reputation_options`<sup>Optional</sup> <a name="reputation_options" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetConfig.property.reputationOptions"></a>

```python
reputation_options: SesConfigurationSetReputationOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetReputationOptions">SesConfigurationSetReputationOptions</a>

An object that defines whether or not Amazon SES collects reputation metrics for the emails that you send that use the configuration set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_configuration_set#reputation_options SesConfigurationSet#reputation_options}

---

##### `sending_options`<sup>Optional</sup> <a name="sending_options" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetConfig.property.sendingOptions"></a>

```python
sending_options: SesConfigurationSetSendingOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSendingOptions">SesConfigurationSetSendingOptions</a>

An object that defines whether or not Amazon SES can send email that you send using the configuration set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_configuration_set#sending_options SesConfigurationSet#sending_options}

---

##### `suppression_options`<sup>Optional</sup> <a name="suppression_options" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetConfig.property.suppressionOptions"></a>

```python
suppression_options: SesConfigurationSetSuppressionOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptions">SesConfigurationSetSuppressionOptions</a>

An object that contains information about the suppression list preferences for your account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_configuration_set#suppression_options SesConfigurationSet#suppression_options}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[SesConfigurationSetTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTags">SesConfigurationSetTags</a>]

The tags (keys and values) associated with the contact list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_configuration_set#tags SesConfigurationSet#tags}

---

##### `tracking_options`<sup>Optional</sup> <a name="tracking_options" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetConfig.property.trackingOptions"></a>

```python
tracking_options: SesConfigurationSetTrackingOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTrackingOptions">SesConfigurationSetTrackingOptions</a>

An object that defines the open and click tracking options for emails that you send using the configuration set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_configuration_set#tracking_options SesConfigurationSet#tracking_options}

---

##### `vdm_options`<sup>Optional</sup> <a name="vdm_options" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetConfig.property.vdmOptions"></a>

```python
vdm_options: SesConfigurationSetVdmOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptions">SesConfigurationSetVdmOptions</a>

An object that contains Virtual Deliverability Manager (VDM) settings for this configuration set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_configuration_set#vdm_options SesConfigurationSet#vdm_options}

---

### SesConfigurationSetDeliveryOptions <a name="SesConfigurationSetDeliveryOptions" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptions.Initializer"></a>

```python
from cdktn_provider_awscc import ses_configuration_set

sesConfigurationSet.SesConfigurationSetDeliveryOptions(
  max_delivery_seconds: typing.Union[int, float] = None,
  sending_pool_name: str = None,
  tls_policy: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptions.property.maxDeliverySeconds">max_delivery_seconds</a></code> | <code>typing.Union[int, float]</code> | Specifies the maximum time until which SES will retry sending emails. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptions.property.sendingPoolName">sending_pool_name</a></code> | <code>str</code> | The name of the dedicated IP pool to associate with the configuration set. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptions.property.tlsPolicy">tls_policy</a></code> | <code>str</code> | Specifies whether messages that use the configuration set are required to use Transport Layer Security (TLS). |

---

##### `max_delivery_seconds`<sup>Optional</sup> <a name="max_delivery_seconds" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptions.property.maxDeliverySeconds"></a>

```python
max_delivery_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Specifies the maximum time until which SES will retry sending emails.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_configuration_set#max_delivery_seconds SesConfigurationSet#max_delivery_seconds}

---

##### `sending_pool_name`<sup>Optional</sup> <a name="sending_pool_name" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptions.property.sendingPoolName"></a>

```python
sending_pool_name: str
```

- *Type:* str

The name of the dedicated IP pool to associate with the configuration set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_configuration_set#sending_pool_name SesConfigurationSet#sending_pool_name}

---

##### `tls_policy`<sup>Optional</sup> <a name="tls_policy" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptions.property.tlsPolicy"></a>

```python
tls_policy: str
```

- *Type:* str

Specifies whether messages that use the configuration set are required to use Transport Layer Security (TLS).

If the value is Require , messages are only delivered if a TLS connection can be established. If the value is Optional , messages can be delivered in plain text if a TLS connection can't be established.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_configuration_set#tls_policy SesConfigurationSet#tls_policy}

---

### SesConfigurationSetReputationOptions <a name="SesConfigurationSetReputationOptions" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetReputationOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetReputationOptions.Initializer"></a>

```python
from cdktn_provider_awscc import ses_configuration_set

sesConfigurationSet.SesConfigurationSetReputationOptions(
  reputation_metrics_enabled: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetReputationOptions.property.reputationMetricsEnabled">reputation_metrics_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | If true , tracking of reputation metrics is enabled for the configuration set. |

---

##### `reputation_metrics_enabled`<sup>Optional</sup> <a name="reputation_metrics_enabled" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetReputationOptions.property.reputationMetricsEnabled"></a>

```python
reputation_metrics_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

If true , tracking of reputation metrics is enabled for the configuration set.

If false , tracking of reputation metrics is disabled for the configuration set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_configuration_set#reputation_metrics_enabled SesConfigurationSet#reputation_metrics_enabled}

---

### SesConfigurationSetSendingOptions <a name="SesConfigurationSetSendingOptions" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSendingOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSendingOptions.Initializer"></a>

```python
from cdktn_provider_awscc import ses_configuration_set

sesConfigurationSet.SesConfigurationSetSendingOptions(
  sending_enabled: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSendingOptions.property.sendingEnabled">sending_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_configuration_set#sending_enabled SesConfigurationSet#sending_enabled}. |

---

##### `sending_enabled`<sup>Optional</sup> <a name="sending_enabled" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSendingOptions.property.sendingEnabled"></a>

```python
sending_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_configuration_set#sending_enabled SesConfigurationSet#sending_enabled}.

---

### SesConfigurationSetSuppressionOptions <a name="SesConfigurationSetSuppressionOptions" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptions.Initializer"></a>

```python
from cdktn_provider_awscc import ses_configuration_set

sesConfigurationSet.SesConfigurationSetSuppressionOptions(
  suppressed_reasons: typing.List[str] = None,
  validation_options: SesConfigurationSetSuppressionOptionsValidationOptions = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptions.property.suppressedReasons">suppressed_reasons</a></code> | <code>typing.List[str]</code> | A list that contains the reasons that email addresses are automatically added to the suppression list for your account. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptions.property.validationOptions">validation_options</a></code> | <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptions">SesConfigurationSetSuppressionOptionsValidationOptions</a></code> | An object that contains information about the validation options for your account. |

---

##### `suppressed_reasons`<sup>Optional</sup> <a name="suppressed_reasons" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptions.property.suppressedReasons"></a>

```python
suppressed_reasons: typing.List[str]
```

- *Type:* typing.List[str]

A list that contains the reasons that email addresses are automatically added to the suppression list for your account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_configuration_set#suppressed_reasons SesConfigurationSet#suppressed_reasons}

---

##### `validation_options`<sup>Optional</sup> <a name="validation_options" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptions.property.validationOptions"></a>

```python
validation_options: SesConfigurationSetSuppressionOptionsValidationOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptions">SesConfigurationSetSuppressionOptionsValidationOptions</a>

An object that contains information about the validation options for your account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_configuration_set#validation_options SesConfigurationSet#validation_options}

---

### SesConfigurationSetSuppressionOptionsValidationOptions <a name="SesConfigurationSetSuppressionOptionsValidationOptions" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptions.Initializer"></a>

```python
from cdktn_provider_awscc import ses_configuration_set

sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptions(
  condition_threshold: SesConfigurationSetSuppressionOptionsValidationOptionsConditionThreshold = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptions.property.conditionThreshold">condition_threshold</a></code> | <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThreshold">SesConfigurationSetSuppressionOptionsValidationOptionsConditionThreshold</a></code> | The condition threshold settings for suppression validation. |

---

##### `condition_threshold`<sup>Optional</sup> <a name="condition_threshold" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptions.property.conditionThreshold"></a>

```python
condition_threshold: SesConfigurationSetSuppressionOptionsValidationOptionsConditionThreshold
```

- *Type:* <a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThreshold">SesConfigurationSetSuppressionOptionsValidationOptionsConditionThreshold</a>

The condition threshold settings for suppression validation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_configuration_set#condition_threshold SesConfigurationSet#condition_threshold}

---

### SesConfigurationSetSuppressionOptionsValidationOptionsConditionThreshold <a name="SesConfigurationSetSuppressionOptionsValidationOptionsConditionThreshold" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThreshold"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThreshold.Initializer"></a>

```python
from cdktn_provider_awscc import ses_configuration_set

sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThreshold(
  condition_threshold_enabled: str = None,
  overall_confidence_threshold: SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThreshold = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThreshold.property.conditionThresholdEnabled">condition_threshold_enabled</a></code> | <code>str</code> | Whether the condition threshold is enabled or disabled. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThreshold.property.overallConfidenceThreshold">overall_confidence_threshold</a></code> | <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThreshold">SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThreshold</a></code> | The overall confidence threshold settings. |

---

##### `condition_threshold_enabled`<sup>Optional</sup> <a name="condition_threshold_enabled" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThreshold.property.conditionThresholdEnabled"></a>

```python
condition_threshold_enabled: str
```

- *Type:* str

Whether the condition threshold is enabled or disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_configuration_set#condition_threshold_enabled SesConfigurationSet#condition_threshold_enabled}

---

##### `overall_confidence_threshold`<sup>Optional</sup> <a name="overall_confidence_threshold" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThreshold.property.overallConfidenceThreshold"></a>

```python
overall_confidence_threshold: SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThreshold
```

- *Type:* <a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThreshold">SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThreshold</a>

The overall confidence threshold settings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_configuration_set#overall_confidence_threshold SesConfigurationSet#overall_confidence_threshold}

---

### SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThreshold <a name="SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThreshold" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThreshold"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThreshold.Initializer"></a>

```python
from cdktn_provider_awscc import ses_configuration_set

sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThreshold(
  confidence_verdict_threshold: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThreshold.property.confidenceVerdictThreshold">confidence_verdict_threshold</a></code> | <code>str</code> | The confidence verdict threshold level. |

---

##### `confidence_verdict_threshold`<sup>Optional</sup> <a name="confidence_verdict_threshold" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThreshold.property.confidenceVerdictThreshold"></a>

```python
confidence_verdict_threshold: str
```

- *Type:* str

The confidence verdict threshold level.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_configuration_set#confidence_verdict_threshold SesConfigurationSet#confidence_verdict_threshold}

---

### SesConfigurationSetTags <a name="SesConfigurationSetTags" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTags.Initializer"></a>

```python
from cdktn_provider_awscc import ses_configuration_set

sesConfigurationSet.SesConfigurationSetTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTags.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_configuration_set#key SesConfigurationSet#key}. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTags.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_configuration_set#value SesConfigurationSet#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTags.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_configuration_set#key SesConfigurationSet#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTags.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_configuration_set#value SesConfigurationSet#value}.

---

### SesConfigurationSetTrackingOptions <a name="SesConfigurationSetTrackingOptions" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTrackingOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTrackingOptions.Initializer"></a>

```python
from cdktn_provider_awscc import ses_configuration_set

sesConfigurationSet.SesConfigurationSetTrackingOptions(
  custom_redirect_domain: str = None,
  https_policy: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTrackingOptions.property.customRedirectDomain">custom_redirect_domain</a></code> | <code>str</code> | The domain to use for tracking open and click events. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTrackingOptions.property.httpsPolicy">https_policy</a></code> | <code>str</code> | The https policy to use for tracking open and click events. |

---

##### `custom_redirect_domain`<sup>Optional</sup> <a name="custom_redirect_domain" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTrackingOptions.property.customRedirectDomain"></a>

```python
custom_redirect_domain: str
```

- *Type:* str

The domain to use for tracking open and click events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_configuration_set#custom_redirect_domain SesConfigurationSet#custom_redirect_domain}

---

##### `https_policy`<sup>Optional</sup> <a name="https_policy" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTrackingOptions.property.httpsPolicy"></a>

```python
https_policy: str
```

- *Type:* str

The https policy to use for tracking open and click events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_configuration_set#https_policy SesConfigurationSet#https_policy}

---

### SesConfigurationSetVdmOptions <a name="SesConfigurationSetVdmOptions" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptions.Initializer"></a>

```python
from cdktn_provider_awscc import ses_configuration_set

sesConfigurationSet.SesConfigurationSetVdmOptions(
  dashboard_options: SesConfigurationSetVdmOptionsDashboardOptions = None,
  guardian_options: SesConfigurationSetVdmOptionsGuardianOptions = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptions.property.dashboardOptions">dashboard_options</a></code> | <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsDashboardOptions">SesConfigurationSetVdmOptionsDashboardOptions</a></code> | Preferences regarding the Dashboard feature. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptions.property.guardianOptions">guardian_options</a></code> | <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsGuardianOptions">SesConfigurationSetVdmOptionsGuardianOptions</a></code> | Preferences regarding the Guardian feature. |

---

##### `dashboard_options`<sup>Optional</sup> <a name="dashboard_options" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptions.property.dashboardOptions"></a>

```python
dashboard_options: SesConfigurationSetVdmOptionsDashboardOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsDashboardOptions">SesConfigurationSetVdmOptionsDashboardOptions</a>

Preferences regarding the Dashboard feature.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_configuration_set#dashboard_options SesConfigurationSet#dashboard_options}

---

##### `guardian_options`<sup>Optional</sup> <a name="guardian_options" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptions.property.guardianOptions"></a>

```python
guardian_options: SesConfigurationSetVdmOptionsGuardianOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsGuardianOptions">SesConfigurationSetVdmOptionsGuardianOptions</a>

Preferences regarding the Guardian feature.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_configuration_set#guardian_options SesConfigurationSet#guardian_options}

---

### SesConfigurationSetVdmOptionsDashboardOptions <a name="SesConfigurationSetVdmOptionsDashboardOptions" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsDashboardOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsDashboardOptions.Initializer"></a>

```python
from cdktn_provider_awscc import ses_configuration_set

sesConfigurationSet.SesConfigurationSetVdmOptionsDashboardOptions(
  engagement_metrics: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsDashboardOptions.property.engagementMetrics">engagement_metrics</a></code> | <code>str</code> | Whether emails sent with this configuration set have engagement tracking enabled. |

---

##### `engagement_metrics`<sup>Optional</sup> <a name="engagement_metrics" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsDashboardOptions.property.engagementMetrics"></a>

```python
engagement_metrics: str
```

- *Type:* str

Whether emails sent with this configuration set have engagement tracking enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_configuration_set#engagement_metrics SesConfigurationSet#engagement_metrics}

---

### SesConfigurationSetVdmOptionsGuardianOptions <a name="SesConfigurationSetVdmOptionsGuardianOptions" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsGuardianOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsGuardianOptions.Initializer"></a>

```python
from cdktn_provider_awscc import ses_configuration_set

sesConfigurationSet.SesConfigurationSetVdmOptionsGuardianOptions(
  optimized_shared_delivery: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsGuardianOptions.property.optimizedSharedDelivery">optimized_shared_delivery</a></code> | <code>str</code> | Whether emails sent with this configuration set have optimized delivery algorithm enabled. |

---

##### `optimized_shared_delivery`<sup>Optional</sup> <a name="optimized_shared_delivery" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsGuardianOptions.property.optimizedSharedDelivery"></a>

```python
optimized_shared_delivery: str
```

- *Type:* str

Whether emails sent with this configuration set have optimized delivery algorithm enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_configuration_set#optimized_shared_delivery SesConfigurationSet#optimized_shared_delivery}

---

## Classes <a name="Classes" id="Classes"></a>

### SesConfigurationSetArchivingOptionsOutputReference <a name="SesConfigurationSetArchivingOptionsOutputReference" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetArchivingOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetArchivingOptionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import ses_configuration_set

sesConfigurationSet.SesConfigurationSetArchivingOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetArchivingOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetArchivingOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetArchivingOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetArchivingOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetArchivingOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetArchivingOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetArchivingOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetArchivingOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetArchivingOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetArchivingOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetArchivingOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetArchivingOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetArchivingOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetArchivingOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetArchivingOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetArchivingOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetArchivingOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetArchivingOptionsOutputReference.resetArchiveArn">reset_archive_arn</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetArchivingOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetArchivingOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetArchivingOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetArchivingOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetArchivingOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetArchivingOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetArchivingOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetArchivingOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetArchivingOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetArchivingOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetArchivingOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetArchivingOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetArchivingOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetArchivingOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetArchivingOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetArchivingOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetArchivingOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetArchivingOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetArchivingOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetArchivingOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetArchivingOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetArchivingOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetArchivingOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetArchivingOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_archive_arn` <a name="reset_archive_arn" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetArchivingOptionsOutputReference.resetArchiveArn"></a>

```python
def reset_archive_arn() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetArchivingOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetArchivingOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetArchivingOptionsOutputReference.property.archiveArnInput">archive_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetArchivingOptionsOutputReference.property.archiveArn">archive_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetArchivingOptionsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetArchivingOptions">SesConfigurationSetArchivingOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetArchivingOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetArchivingOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `archive_arn_input`<sup>Optional</sup> <a name="archive_arn_input" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetArchivingOptionsOutputReference.property.archiveArnInput"></a>

```python
archive_arn_input: str
```

- *Type:* str

---

##### `archive_arn`<sup>Required</sup> <a name="archive_arn" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetArchivingOptionsOutputReference.property.archiveArn"></a>

```python
archive_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetArchivingOptionsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SesConfigurationSetArchivingOptions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetArchivingOptions">SesConfigurationSetArchivingOptions</a>

---


### SesConfigurationSetDeliveryOptionsOutputReference <a name="SesConfigurationSetDeliveryOptionsOutputReference" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import ses_configuration_set

sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.resetMaxDeliverySeconds">reset_max_delivery_seconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.resetSendingPoolName">reset_sending_pool_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.resetTlsPolicy">reset_tls_policy</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_max_delivery_seconds` <a name="reset_max_delivery_seconds" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.resetMaxDeliverySeconds"></a>

```python
def reset_max_delivery_seconds() -> None
```

##### `reset_sending_pool_name` <a name="reset_sending_pool_name" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.resetSendingPoolName"></a>

```python
def reset_sending_pool_name() -> None
```

##### `reset_tls_policy` <a name="reset_tls_policy" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.resetTlsPolicy"></a>

```python
def reset_tls_policy() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.property.maxDeliverySecondsInput">max_delivery_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.property.sendingPoolNameInput">sending_pool_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.property.tlsPolicyInput">tls_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.property.maxDeliverySeconds">max_delivery_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.property.sendingPoolName">sending_pool_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.property.tlsPolicy">tls_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptions">SesConfigurationSetDeliveryOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `max_delivery_seconds_input`<sup>Optional</sup> <a name="max_delivery_seconds_input" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.property.maxDeliverySecondsInput"></a>

```python
max_delivery_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `sending_pool_name_input`<sup>Optional</sup> <a name="sending_pool_name_input" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.property.sendingPoolNameInput"></a>

```python
sending_pool_name_input: str
```

- *Type:* str

---

##### `tls_policy_input`<sup>Optional</sup> <a name="tls_policy_input" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.property.tlsPolicyInput"></a>

```python
tls_policy_input: str
```

- *Type:* str

---

##### `max_delivery_seconds`<sup>Required</sup> <a name="max_delivery_seconds" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.property.maxDeliverySeconds"></a>

```python
max_delivery_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `sending_pool_name`<sup>Required</sup> <a name="sending_pool_name" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.property.sendingPoolName"></a>

```python
sending_pool_name: str
```

- *Type:* str

---

##### `tls_policy`<sup>Required</sup> <a name="tls_policy" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.property.tlsPolicy"></a>

```python
tls_policy: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SesConfigurationSetDeliveryOptions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptions">SesConfigurationSetDeliveryOptions</a>

---


### SesConfigurationSetReputationOptionsOutputReference <a name="SesConfigurationSetReputationOptionsOutputReference" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetReputationOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetReputationOptionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import ses_configuration_set

sesConfigurationSet.SesConfigurationSetReputationOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetReputationOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetReputationOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetReputationOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetReputationOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetReputationOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetReputationOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetReputationOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetReputationOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetReputationOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetReputationOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetReputationOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetReputationOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetReputationOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetReputationOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetReputationOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetReputationOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetReputationOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetReputationOptionsOutputReference.resetReputationMetricsEnabled">reset_reputation_metrics_enabled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetReputationOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetReputationOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetReputationOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetReputationOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetReputationOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetReputationOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetReputationOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetReputationOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetReputationOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetReputationOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetReputationOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetReputationOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetReputationOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetReputationOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetReputationOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetReputationOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetReputationOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetReputationOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetReputationOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetReputationOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetReputationOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetReputationOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetReputationOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetReputationOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_reputation_metrics_enabled` <a name="reset_reputation_metrics_enabled" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetReputationOptionsOutputReference.resetReputationMetricsEnabled"></a>

```python
def reset_reputation_metrics_enabled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetReputationOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetReputationOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetReputationOptionsOutputReference.property.reputationMetricsEnabledInput">reputation_metrics_enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetReputationOptionsOutputReference.property.reputationMetricsEnabled">reputation_metrics_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetReputationOptionsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetReputationOptions">SesConfigurationSetReputationOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetReputationOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetReputationOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `reputation_metrics_enabled_input`<sup>Optional</sup> <a name="reputation_metrics_enabled_input" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetReputationOptionsOutputReference.property.reputationMetricsEnabledInput"></a>

```python
reputation_metrics_enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `reputation_metrics_enabled`<sup>Required</sup> <a name="reputation_metrics_enabled" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetReputationOptionsOutputReference.property.reputationMetricsEnabled"></a>

```python
reputation_metrics_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetReputationOptionsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SesConfigurationSetReputationOptions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetReputationOptions">SesConfigurationSetReputationOptions</a>

---


### SesConfigurationSetSendingOptionsOutputReference <a name="SesConfigurationSetSendingOptionsOutputReference" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSendingOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSendingOptionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import ses_configuration_set

sesConfigurationSet.SesConfigurationSetSendingOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSendingOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSendingOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSendingOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSendingOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSendingOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSendingOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSendingOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSendingOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSendingOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSendingOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSendingOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSendingOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSendingOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSendingOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSendingOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSendingOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSendingOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSendingOptionsOutputReference.resetSendingEnabled">reset_sending_enabled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSendingOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSendingOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSendingOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSendingOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSendingOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSendingOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSendingOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSendingOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSendingOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSendingOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSendingOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSendingOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSendingOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSendingOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSendingOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSendingOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSendingOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSendingOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSendingOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSendingOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSendingOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSendingOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSendingOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSendingOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_sending_enabled` <a name="reset_sending_enabled" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSendingOptionsOutputReference.resetSendingEnabled"></a>

```python
def reset_sending_enabled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSendingOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSendingOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSendingOptionsOutputReference.property.sendingEnabledInput">sending_enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSendingOptionsOutputReference.property.sendingEnabled">sending_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSendingOptionsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSendingOptions">SesConfigurationSetSendingOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSendingOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSendingOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `sending_enabled_input`<sup>Optional</sup> <a name="sending_enabled_input" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSendingOptionsOutputReference.property.sendingEnabledInput"></a>

```python
sending_enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `sending_enabled`<sup>Required</sup> <a name="sending_enabled" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSendingOptionsOutputReference.property.sendingEnabled"></a>

```python
sending_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSendingOptionsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SesConfigurationSetSendingOptions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSendingOptions">SesConfigurationSetSendingOptions</a>

---


### SesConfigurationSetSuppressionOptionsOutputReference <a name="SesConfigurationSetSuppressionOptionsOutputReference" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import ses_configuration_set

sesConfigurationSet.SesConfigurationSetSuppressionOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsOutputReference.putValidationOptions">put_validation_options</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsOutputReference.resetSuppressedReasons">reset_suppressed_reasons</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsOutputReference.resetValidationOptions">reset_validation_options</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_validation_options` <a name="put_validation_options" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsOutputReference.putValidationOptions"></a>

```python
def put_validation_options(
  condition_threshold: SesConfigurationSetSuppressionOptionsValidationOptionsConditionThreshold = None
) -> None
```

###### `condition_threshold`<sup>Optional</sup> <a name="condition_threshold" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsOutputReference.putValidationOptions.parameter.conditionThreshold"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThreshold">SesConfigurationSetSuppressionOptionsValidationOptionsConditionThreshold</a>

The condition threshold settings for suppression validation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_configuration_set#condition_threshold SesConfigurationSet#condition_threshold}

---

##### `reset_suppressed_reasons` <a name="reset_suppressed_reasons" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsOutputReference.resetSuppressedReasons"></a>

```python
def reset_suppressed_reasons() -> None
```

##### `reset_validation_options` <a name="reset_validation_options" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsOutputReference.resetValidationOptions"></a>

```python
def reset_validation_options() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsOutputReference.property.validationOptions">validation_options</a></code> | <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsOutputReference">SesConfigurationSetSuppressionOptionsValidationOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsOutputReference.property.suppressedReasonsInput">suppressed_reasons_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsOutputReference.property.validationOptionsInput">validation_options_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptions">SesConfigurationSetSuppressionOptionsValidationOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsOutputReference.property.suppressedReasons">suppressed_reasons</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptions">SesConfigurationSetSuppressionOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `validation_options`<sup>Required</sup> <a name="validation_options" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsOutputReference.property.validationOptions"></a>

```python
validation_options: SesConfigurationSetSuppressionOptionsValidationOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsOutputReference">SesConfigurationSetSuppressionOptionsValidationOptionsOutputReference</a>

---

##### `suppressed_reasons_input`<sup>Optional</sup> <a name="suppressed_reasons_input" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsOutputReference.property.suppressedReasonsInput"></a>

```python
suppressed_reasons_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `validation_options_input`<sup>Optional</sup> <a name="validation_options_input" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsOutputReference.property.validationOptionsInput"></a>

```python
validation_options_input: IResolvable | SesConfigurationSetSuppressionOptionsValidationOptions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptions">SesConfigurationSetSuppressionOptionsValidationOptions</a>

---

##### `suppressed_reasons`<sup>Required</sup> <a name="suppressed_reasons" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsOutputReference.property.suppressedReasons"></a>

```python
suppressed_reasons: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SesConfigurationSetSuppressionOptions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptions">SesConfigurationSetSuppressionOptions</a>

---


### SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference <a name="SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import ses_configuration_set

sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference.putOverallConfidenceThreshold">put_overall_confidence_threshold</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference.resetConditionThresholdEnabled">reset_condition_threshold_enabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference.resetOverallConfidenceThreshold">reset_overall_confidence_threshold</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_overall_confidence_threshold` <a name="put_overall_confidence_threshold" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference.putOverallConfidenceThreshold"></a>

```python
def put_overall_confidence_threshold(
  confidence_verdict_threshold: str = None
) -> None
```

###### `confidence_verdict_threshold`<sup>Optional</sup> <a name="confidence_verdict_threshold" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference.putOverallConfidenceThreshold.parameter.confidenceVerdictThreshold"></a>

- *Type:* str

The confidence verdict threshold level.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_configuration_set#confidence_verdict_threshold SesConfigurationSet#confidence_verdict_threshold}

---

##### `reset_condition_threshold_enabled` <a name="reset_condition_threshold_enabled" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference.resetConditionThresholdEnabled"></a>

```python
def reset_condition_threshold_enabled() -> None
```

##### `reset_overall_confidence_threshold` <a name="reset_overall_confidence_threshold" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference.resetOverallConfidenceThreshold"></a>

```python
def reset_overall_confidence_threshold() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference.property.overallConfidenceThreshold">overall_confidence_threshold</a></code> | <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdOutputReference">SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference.property.conditionThresholdEnabledInput">condition_threshold_enabled_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference.property.overallConfidenceThresholdInput">overall_confidence_threshold_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThreshold">SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThreshold</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference.property.conditionThresholdEnabled">condition_threshold_enabled</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThreshold">SesConfigurationSetSuppressionOptionsValidationOptionsConditionThreshold</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `overall_confidence_threshold`<sup>Required</sup> <a name="overall_confidence_threshold" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference.property.overallConfidenceThreshold"></a>

```python
overall_confidence_threshold: SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdOutputReference">SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdOutputReference</a>

---

##### `condition_threshold_enabled_input`<sup>Optional</sup> <a name="condition_threshold_enabled_input" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference.property.conditionThresholdEnabledInput"></a>

```python
condition_threshold_enabled_input: str
```

- *Type:* str

---

##### `overall_confidence_threshold_input`<sup>Optional</sup> <a name="overall_confidence_threshold_input" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference.property.overallConfidenceThresholdInput"></a>

```python
overall_confidence_threshold_input: IResolvable | SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThreshold
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThreshold">SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThreshold</a>

---

##### `condition_threshold_enabled`<sup>Required</sup> <a name="condition_threshold_enabled" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference.property.conditionThresholdEnabled"></a>

```python
condition_threshold_enabled: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SesConfigurationSetSuppressionOptionsValidationOptionsConditionThreshold
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThreshold">SesConfigurationSetSuppressionOptionsValidationOptionsConditionThreshold</a>

---


### SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdOutputReference <a name="SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdOutputReference" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import ses_configuration_set

sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdOutputReference.resetConfidenceVerdictThreshold">reset_confidence_verdict_threshold</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_confidence_verdict_threshold` <a name="reset_confidence_verdict_threshold" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdOutputReference.resetConfidenceVerdictThreshold"></a>

```python
def reset_confidence_verdict_threshold() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdOutputReference.property.confidenceVerdictThresholdInput">confidence_verdict_threshold_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdOutputReference.property.confidenceVerdictThreshold">confidence_verdict_threshold</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThreshold">SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThreshold</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `confidence_verdict_threshold_input`<sup>Optional</sup> <a name="confidence_verdict_threshold_input" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdOutputReference.property.confidenceVerdictThresholdInput"></a>

```python
confidence_verdict_threshold_input: str
```

- *Type:* str

---

##### `confidence_verdict_threshold`<sup>Required</sup> <a name="confidence_verdict_threshold" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdOutputReference.property.confidenceVerdictThreshold"></a>

```python
confidence_verdict_threshold: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThreshold
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThreshold">SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThreshold</a>

---


### SesConfigurationSetSuppressionOptionsValidationOptionsOutputReference <a name="SesConfigurationSetSuppressionOptionsValidationOptionsOutputReference" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import ses_configuration_set

sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsOutputReference.putConditionThreshold">put_condition_threshold</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsOutputReference.resetConditionThreshold">reset_condition_threshold</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_condition_threshold` <a name="put_condition_threshold" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsOutputReference.putConditionThreshold"></a>

```python
def put_condition_threshold(
  condition_threshold_enabled: str = None,
  overall_confidence_threshold: SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThreshold = None
) -> None
```

###### `condition_threshold_enabled`<sup>Optional</sup> <a name="condition_threshold_enabled" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsOutputReference.putConditionThreshold.parameter.conditionThresholdEnabled"></a>

- *Type:* str

Whether the condition threshold is enabled or disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_configuration_set#condition_threshold_enabled SesConfigurationSet#condition_threshold_enabled}

---

###### `overall_confidence_threshold`<sup>Optional</sup> <a name="overall_confidence_threshold" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsOutputReference.putConditionThreshold.parameter.overallConfidenceThreshold"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThreshold">SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThreshold</a>

The overall confidence threshold settings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_configuration_set#overall_confidence_threshold SesConfigurationSet#overall_confidence_threshold}

---

##### `reset_condition_threshold` <a name="reset_condition_threshold" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsOutputReference.resetConditionThreshold"></a>

```python
def reset_condition_threshold() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsOutputReference.property.conditionThreshold">condition_threshold</a></code> | <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference">SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsOutputReference.property.conditionThresholdInput">condition_threshold_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThreshold">SesConfigurationSetSuppressionOptionsValidationOptionsConditionThreshold</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptions">SesConfigurationSetSuppressionOptionsValidationOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `condition_threshold`<sup>Required</sup> <a name="condition_threshold" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsOutputReference.property.conditionThreshold"></a>

```python
condition_threshold: SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference">SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference</a>

---

##### `condition_threshold_input`<sup>Optional</sup> <a name="condition_threshold_input" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsOutputReference.property.conditionThresholdInput"></a>

```python
condition_threshold_input: IResolvable | SesConfigurationSetSuppressionOptionsValidationOptionsConditionThreshold
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThreshold">SesConfigurationSetSuppressionOptionsValidationOptionsConditionThreshold</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SesConfigurationSetSuppressionOptionsValidationOptions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptions">SesConfigurationSetSuppressionOptionsValidationOptions</a>

---


### SesConfigurationSetTagsList <a name="SesConfigurationSetTagsList" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import ses_configuration_set

sesConfigurationSet.SesConfigurationSetTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SesConfigurationSetTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTags">SesConfigurationSetTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[SesConfigurationSetTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTags">SesConfigurationSetTags</a>]

---


### SesConfigurationSetTagsOutputReference <a name="SesConfigurationSetTagsOutputReference" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import ses_configuration_set

sesConfigurationSet.SesConfigurationSetTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTags">SesConfigurationSetTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SesConfigurationSetTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTags">SesConfigurationSetTags</a>

---


### SesConfigurationSetTrackingOptionsOutputReference <a name="SesConfigurationSetTrackingOptionsOutputReference" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import ses_configuration_set

sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.resetCustomRedirectDomain">reset_custom_redirect_domain</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.resetHttpsPolicy">reset_https_policy</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_custom_redirect_domain` <a name="reset_custom_redirect_domain" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.resetCustomRedirectDomain"></a>

```python
def reset_custom_redirect_domain() -> None
```

##### `reset_https_policy` <a name="reset_https_policy" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.resetHttpsPolicy"></a>

```python
def reset_https_policy() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.property.customRedirectDomainInput">custom_redirect_domain_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.property.httpsPolicyInput">https_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.property.customRedirectDomain">custom_redirect_domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.property.httpsPolicy">https_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTrackingOptions">SesConfigurationSetTrackingOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `custom_redirect_domain_input`<sup>Optional</sup> <a name="custom_redirect_domain_input" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.property.customRedirectDomainInput"></a>

```python
custom_redirect_domain_input: str
```

- *Type:* str

---

##### `https_policy_input`<sup>Optional</sup> <a name="https_policy_input" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.property.httpsPolicyInput"></a>

```python
https_policy_input: str
```

- *Type:* str

---

##### `custom_redirect_domain`<sup>Required</sup> <a name="custom_redirect_domain" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.property.customRedirectDomain"></a>

```python
custom_redirect_domain: str
```

- *Type:* str

---

##### `https_policy`<sup>Required</sup> <a name="https_policy" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.property.httpsPolicy"></a>

```python
https_policy: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SesConfigurationSetTrackingOptions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTrackingOptions">SesConfigurationSetTrackingOptions</a>

---


### SesConfigurationSetVdmOptionsDashboardOptionsOutputReference <a name="SesConfigurationSetVdmOptionsDashboardOptionsOutputReference" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsDashboardOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsDashboardOptionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import ses_configuration_set

sesConfigurationSet.SesConfigurationSetVdmOptionsDashboardOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsDashboardOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsDashboardOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsDashboardOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsDashboardOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsDashboardOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsDashboardOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsDashboardOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsDashboardOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsDashboardOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsDashboardOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsDashboardOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsDashboardOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsDashboardOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsDashboardOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsDashboardOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsDashboardOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsDashboardOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsDashboardOptionsOutputReference.resetEngagementMetrics">reset_engagement_metrics</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsDashboardOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsDashboardOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsDashboardOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsDashboardOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsDashboardOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsDashboardOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsDashboardOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsDashboardOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsDashboardOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsDashboardOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsDashboardOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsDashboardOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsDashboardOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsDashboardOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsDashboardOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsDashboardOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsDashboardOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsDashboardOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsDashboardOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsDashboardOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsDashboardOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsDashboardOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsDashboardOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsDashboardOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_engagement_metrics` <a name="reset_engagement_metrics" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsDashboardOptionsOutputReference.resetEngagementMetrics"></a>

```python
def reset_engagement_metrics() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsDashboardOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsDashboardOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsDashboardOptionsOutputReference.property.engagementMetricsInput">engagement_metrics_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsDashboardOptionsOutputReference.property.engagementMetrics">engagement_metrics</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsDashboardOptionsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsDashboardOptions">SesConfigurationSetVdmOptionsDashboardOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsDashboardOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsDashboardOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `engagement_metrics_input`<sup>Optional</sup> <a name="engagement_metrics_input" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsDashboardOptionsOutputReference.property.engagementMetricsInput"></a>

```python
engagement_metrics_input: str
```

- *Type:* str

---

##### `engagement_metrics`<sup>Required</sup> <a name="engagement_metrics" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsDashboardOptionsOutputReference.property.engagementMetrics"></a>

```python
engagement_metrics: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsDashboardOptionsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SesConfigurationSetVdmOptionsDashboardOptions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsDashboardOptions">SesConfigurationSetVdmOptionsDashboardOptions</a>

---


### SesConfigurationSetVdmOptionsGuardianOptionsOutputReference <a name="SesConfigurationSetVdmOptionsGuardianOptionsOutputReference" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsGuardianOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsGuardianOptionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import ses_configuration_set

sesConfigurationSet.SesConfigurationSetVdmOptionsGuardianOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsGuardianOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsGuardianOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsGuardianOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsGuardianOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsGuardianOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsGuardianOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsGuardianOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsGuardianOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsGuardianOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsGuardianOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsGuardianOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsGuardianOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsGuardianOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsGuardianOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsGuardianOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsGuardianOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsGuardianOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsGuardianOptionsOutputReference.resetOptimizedSharedDelivery">reset_optimized_shared_delivery</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsGuardianOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsGuardianOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsGuardianOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsGuardianOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsGuardianOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsGuardianOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsGuardianOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsGuardianOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsGuardianOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsGuardianOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsGuardianOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsGuardianOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsGuardianOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsGuardianOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsGuardianOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsGuardianOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsGuardianOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsGuardianOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsGuardianOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsGuardianOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsGuardianOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsGuardianOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsGuardianOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsGuardianOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_optimized_shared_delivery` <a name="reset_optimized_shared_delivery" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsGuardianOptionsOutputReference.resetOptimizedSharedDelivery"></a>

```python
def reset_optimized_shared_delivery() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsGuardianOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsGuardianOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsGuardianOptionsOutputReference.property.optimizedSharedDeliveryInput">optimized_shared_delivery_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsGuardianOptionsOutputReference.property.optimizedSharedDelivery">optimized_shared_delivery</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsGuardianOptionsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsGuardianOptions">SesConfigurationSetVdmOptionsGuardianOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsGuardianOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsGuardianOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `optimized_shared_delivery_input`<sup>Optional</sup> <a name="optimized_shared_delivery_input" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsGuardianOptionsOutputReference.property.optimizedSharedDeliveryInput"></a>

```python
optimized_shared_delivery_input: str
```

- *Type:* str

---

##### `optimized_shared_delivery`<sup>Required</sup> <a name="optimized_shared_delivery" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsGuardianOptionsOutputReference.property.optimizedSharedDelivery"></a>

```python
optimized_shared_delivery: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsGuardianOptionsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SesConfigurationSetVdmOptionsGuardianOptions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsGuardianOptions">SesConfigurationSetVdmOptionsGuardianOptions</a>

---


### SesConfigurationSetVdmOptionsOutputReference <a name="SesConfigurationSetVdmOptionsOutputReference" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import ses_configuration_set

sesConfigurationSet.SesConfigurationSetVdmOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsOutputReference.putDashboardOptions">put_dashboard_options</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsOutputReference.putGuardianOptions">put_guardian_options</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsOutputReference.resetDashboardOptions">reset_dashboard_options</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsOutputReference.resetGuardianOptions">reset_guardian_options</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_dashboard_options` <a name="put_dashboard_options" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsOutputReference.putDashboardOptions"></a>

```python
def put_dashboard_options(
  engagement_metrics: str = None
) -> None
```

###### `engagement_metrics`<sup>Optional</sup> <a name="engagement_metrics" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsOutputReference.putDashboardOptions.parameter.engagementMetrics"></a>

- *Type:* str

Whether emails sent with this configuration set have engagement tracking enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_configuration_set#engagement_metrics SesConfigurationSet#engagement_metrics}

---

##### `put_guardian_options` <a name="put_guardian_options" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsOutputReference.putGuardianOptions"></a>

```python
def put_guardian_options(
  optimized_shared_delivery: str = None
) -> None
```

###### `optimized_shared_delivery`<sup>Optional</sup> <a name="optimized_shared_delivery" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsOutputReference.putGuardianOptions.parameter.optimizedSharedDelivery"></a>

- *Type:* str

Whether emails sent with this configuration set have optimized delivery algorithm enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_configuration_set#optimized_shared_delivery SesConfigurationSet#optimized_shared_delivery}

---

##### `reset_dashboard_options` <a name="reset_dashboard_options" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsOutputReference.resetDashboardOptions"></a>

```python
def reset_dashboard_options() -> None
```

##### `reset_guardian_options` <a name="reset_guardian_options" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsOutputReference.resetGuardianOptions"></a>

```python
def reset_guardian_options() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsOutputReference.property.dashboardOptions">dashboard_options</a></code> | <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsDashboardOptionsOutputReference">SesConfigurationSetVdmOptionsDashboardOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsOutputReference.property.guardianOptions">guardian_options</a></code> | <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsGuardianOptionsOutputReference">SesConfigurationSetVdmOptionsGuardianOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsOutputReference.property.dashboardOptionsInput">dashboard_options_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsDashboardOptions">SesConfigurationSetVdmOptionsDashboardOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsOutputReference.property.guardianOptionsInput">guardian_options_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsGuardianOptions">SesConfigurationSetVdmOptionsGuardianOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptions">SesConfigurationSetVdmOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dashboard_options`<sup>Required</sup> <a name="dashboard_options" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsOutputReference.property.dashboardOptions"></a>

```python
dashboard_options: SesConfigurationSetVdmOptionsDashboardOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsDashboardOptionsOutputReference">SesConfigurationSetVdmOptionsDashboardOptionsOutputReference</a>

---

##### `guardian_options`<sup>Required</sup> <a name="guardian_options" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsOutputReference.property.guardianOptions"></a>

```python
guardian_options: SesConfigurationSetVdmOptionsGuardianOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsGuardianOptionsOutputReference">SesConfigurationSetVdmOptionsGuardianOptionsOutputReference</a>

---

##### `dashboard_options_input`<sup>Optional</sup> <a name="dashboard_options_input" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsOutputReference.property.dashboardOptionsInput"></a>

```python
dashboard_options_input: IResolvable | SesConfigurationSetVdmOptionsDashboardOptions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsDashboardOptions">SesConfigurationSetVdmOptionsDashboardOptions</a>

---

##### `guardian_options_input`<sup>Optional</sup> <a name="guardian_options_input" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsOutputReference.property.guardianOptionsInput"></a>

```python
guardian_options_input: IResolvable | SesConfigurationSetVdmOptionsGuardianOptions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsGuardianOptions">SesConfigurationSetVdmOptionsGuardianOptions</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SesConfigurationSetVdmOptions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptions">SesConfigurationSetVdmOptions</a>

---



