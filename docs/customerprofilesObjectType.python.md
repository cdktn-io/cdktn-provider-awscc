# `customerprofilesObjectType` Submodule <a name="`customerprofilesObjectType` Submodule" id="@cdktn/provider-awscc.customerprofilesObjectType"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CustomerprofilesObjectType <a name="CustomerprofilesObjectType" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/customerprofiles_object_type awscc_customerprofiles_object_type}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.Initializer"></a>

```python
from cdktn_provider_awscc import customerprofiles_object_type

customerprofilesObjectType.CustomerprofilesObjectType(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  description: str,
  domain_name: str,
  object_type_name: str,
  allow_profile_creation: bool | IResolvable = None,
  encryption_key: str = None,
  expiration_days: typing.Union[int, float] = None,
  fields: IResolvable | typing.List[CustomerprofilesObjectTypeFields] = None,
  keys: IResolvable | typing.List[CustomerprofilesObjectTypeKeys] = None,
  max_profile_object_count: typing.Union[int, float] = None,
  source_last_updated_timestamp_format: str = None,
  source_priority: typing.Union[int, float] = None,
  tags: IResolvable | typing.List[CustomerprofilesObjectTypeTags] = None,
  template_id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.Initializer.parameter.description">description</a></code> | <code>str</code> | Description of the profile object type. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.Initializer.parameter.domainName">domain_name</a></code> | <code>str</code> | The unique name of the domain. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.Initializer.parameter.objectTypeName">object_type_name</a></code> | <code>str</code> | The name of the profile object type. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.Initializer.parameter.allowProfileCreation">allow_profile_creation</a></code> | <code>bool \| cdktn.IResolvable</code> | Indicates whether a profile should be created when data is received. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.Initializer.parameter.encryptionKey">encryption_key</a></code> | <code>str</code> | The default encryption key. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.Initializer.parameter.expirationDays">expiration_days</a></code> | <code>typing.Union[int, float]</code> | The default number of days until the data within the domain expires. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.Initializer.parameter.fields">fields</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFields">CustomerprofilesObjectTypeFields</a>]</code> | A list of the name and ObjectType field. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.Initializer.parameter.keys">keys</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeys">CustomerprofilesObjectTypeKeys</a>]</code> | A list of unique keys that can be used to map data to the profile. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.Initializer.parameter.maxProfileObjectCount">max_profile_object_count</a></code> | <code>typing.Union[int, float]</code> | The maximum number of profile objects for this object type. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.Initializer.parameter.sourceLastUpdatedTimestampFormat">source_last_updated_timestamp_format</a></code> | <code>str</code> | The format of your sourceLastUpdatedTimestamp that was previously set up. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.Initializer.parameter.sourcePriority">source_priority</a></code> | <code>typing.Union[int, float]</code> | Defines the priority order of object types. Lower value indicates higher priority. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTags">CustomerprofilesObjectTypeTags</a>]</code> | The tags (keys and values) associated with the integration. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.Initializer.parameter.templateId">template_id</a></code> | <code>str</code> | A unique identifier for the object template. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.Initializer.parameter.description"></a>

- *Type:* str

Description of the profile object type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/customerprofiles_object_type#description CustomerprofilesObjectType#description}

---

##### `domain_name`<sup>Required</sup> <a name="domain_name" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.Initializer.parameter.domainName"></a>

- *Type:* str

The unique name of the domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/customerprofiles_object_type#domain_name CustomerprofilesObjectType#domain_name}

---

##### `object_type_name`<sup>Required</sup> <a name="object_type_name" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.Initializer.parameter.objectTypeName"></a>

- *Type:* str

The name of the profile object type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/customerprofiles_object_type#object_type_name CustomerprofilesObjectType#object_type_name}

---

##### `allow_profile_creation`<sup>Optional</sup> <a name="allow_profile_creation" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.Initializer.parameter.allowProfileCreation"></a>

- *Type:* bool | cdktn.IResolvable

Indicates whether a profile should be created when data is received.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/customerprofiles_object_type#allow_profile_creation CustomerprofilesObjectType#allow_profile_creation}

---

##### `encryption_key`<sup>Optional</sup> <a name="encryption_key" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.Initializer.parameter.encryptionKey"></a>

- *Type:* str

The default encryption key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/customerprofiles_object_type#encryption_key CustomerprofilesObjectType#encryption_key}

---

##### `expiration_days`<sup>Optional</sup> <a name="expiration_days" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.Initializer.parameter.expirationDays"></a>

- *Type:* typing.Union[int, float]

The default number of days until the data within the domain expires.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/customerprofiles_object_type#expiration_days CustomerprofilesObjectType#expiration_days}

---

##### `fields`<sup>Optional</sup> <a name="fields" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.Initializer.parameter.fields"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFields">CustomerprofilesObjectTypeFields</a>]

A list of the name and ObjectType field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/customerprofiles_object_type#fields CustomerprofilesObjectType#fields}

---

##### `keys`<sup>Optional</sup> <a name="keys" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.Initializer.parameter.keys"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeys">CustomerprofilesObjectTypeKeys</a>]

A list of unique keys that can be used to map data to the profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/customerprofiles_object_type#keys CustomerprofilesObjectType#keys}

---

##### `max_profile_object_count`<sup>Optional</sup> <a name="max_profile_object_count" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.Initializer.parameter.maxProfileObjectCount"></a>

- *Type:* typing.Union[int, float]

The maximum number of profile objects for this object type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/customerprofiles_object_type#max_profile_object_count CustomerprofilesObjectType#max_profile_object_count}

---

##### `source_last_updated_timestamp_format`<sup>Optional</sup> <a name="source_last_updated_timestamp_format" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.Initializer.parameter.sourceLastUpdatedTimestampFormat"></a>

- *Type:* str

The format of your sourceLastUpdatedTimestamp that was previously set up.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/customerprofiles_object_type#source_last_updated_timestamp_format CustomerprofilesObjectType#source_last_updated_timestamp_format}

---

##### `source_priority`<sup>Optional</sup> <a name="source_priority" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.Initializer.parameter.sourcePriority"></a>

- *Type:* typing.Union[int, float]

Defines the priority order of object types. Lower value indicates higher priority.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/customerprofiles_object_type#source_priority CustomerprofilesObjectType#source_priority}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTags">CustomerprofilesObjectTypeTags</a>]

The tags (keys and values) associated with the integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/customerprofiles_object_type#tags CustomerprofilesObjectType#tags}

---

##### `template_id`<sup>Optional</sup> <a name="template_id" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.Initializer.parameter.templateId"></a>

- *Type:* str

A unique identifier for the object template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/customerprofiles_object_type#template_id CustomerprofilesObjectType#template_id}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.putFields">put_fields</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.putKeys">put_keys</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.resetAllowProfileCreation">reset_allow_profile_creation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.resetEncryptionKey">reset_encryption_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.resetExpirationDays">reset_expiration_days</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.resetFields">reset_fields</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.resetKeys">reset_keys</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.resetMaxProfileObjectCount">reset_max_profile_object_count</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.resetSourceLastUpdatedTimestampFormat">reset_source_last_updated_timestamp_format</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.resetSourcePriority">reset_source_priority</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.resetTemplateId">reset_template_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_fields` <a name="put_fields" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.putFields"></a>

```python
def put_fields(
  value: IResolvable | typing.List[CustomerprofilesObjectTypeFields]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.putFields.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFields">CustomerprofilesObjectTypeFields</a>]

---

##### `put_keys` <a name="put_keys" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.putKeys"></a>

```python
def put_keys(
  value: IResolvable | typing.List[CustomerprofilesObjectTypeKeys]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.putKeys.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeys">CustomerprofilesObjectTypeKeys</a>]

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[CustomerprofilesObjectTypeTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTags">CustomerprofilesObjectTypeTags</a>]

---

##### `reset_allow_profile_creation` <a name="reset_allow_profile_creation" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.resetAllowProfileCreation"></a>

```python
def reset_allow_profile_creation() -> None
```

##### `reset_encryption_key` <a name="reset_encryption_key" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.resetEncryptionKey"></a>

```python
def reset_encryption_key() -> None
```

##### `reset_expiration_days` <a name="reset_expiration_days" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.resetExpirationDays"></a>

```python
def reset_expiration_days() -> None
```

##### `reset_fields` <a name="reset_fields" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.resetFields"></a>

```python
def reset_fields() -> None
```

##### `reset_keys` <a name="reset_keys" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.resetKeys"></a>

```python
def reset_keys() -> None
```

##### `reset_max_profile_object_count` <a name="reset_max_profile_object_count" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.resetMaxProfileObjectCount"></a>

```python
def reset_max_profile_object_count() -> None
```

##### `reset_source_last_updated_timestamp_format` <a name="reset_source_last_updated_timestamp_format" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.resetSourceLastUpdatedTimestampFormat"></a>

```python
def reset_source_last_updated_timestamp_format() -> None
```

##### `reset_source_priority` <a name="reset_source_priority" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.resetSourcePriority"></a>

```python
def reset_source_priority() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_template_id` <a name="reset_template_id" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.resetTemplateId"></a>

```python
def reset_template_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a CustomerprofilesObjectType resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.isConstruct"></a>

```python
from cdktn_provider_awscc import customerprofiles_object_type

customerprofilesObjectType.CustomerprofilesObjectType.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.isTerraformElement"></a>

```python
from cdktn_provider_awscc import customerprofiles_object_type

customerprofilesObjectType.CustomerprofilesObjectType.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.isTerraformResource"></a>

```python
from cdktn_provider_awscc import customerprofiles_object_type

customerprofilesObjectType.CustomerprofilesObjectType.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import customerprofiles_object_type

customerprofilesObjectType.CustomerprofilesObjectType.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a CustomerprofilesObjectType resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the CustomerprofilesObjectType to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing CustomerprofilesObjectType that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/customerprofiles_object_type#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the CustomerprofilesObjectType to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.property.fields">fields</a></code> | <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsList">CustomerprofilesObjectTypeFieldsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.property.keys">keys</a></code> | <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysList">CustomerprofilesObjectTypeKeysList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.property.lastUpdatedAt">last_updated_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.property.maxAvailableProfileObjectCount">max_available_profile_object_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTagsList">CustomerprofilesObjectTypeTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.property.allowProfileCreationInput">allow_profile_creation_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.property.domainNameInput">domain_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.property.encryptionKeyInput">encryption_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.property.expirationDaysInput">expiration_days_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.property.fieldsInput">fields_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFields">CustomerprofilesObjectTypeFields</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.property.keysInput">keys_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeys">CustomerprofilesObjectTypeKeys</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.property.maxProfileObjectCountInput">max_profile_object_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.property.objectTypeNameInput">object_type_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.property.sourceLastUpdatedTimestampFormatInput">source_last_updated_timestamp_format_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.property.sourcePriorityInput">source_priority_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTags">CustomerprofilesObjectTypeTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.property.templateIdInput">template_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.property.allowProfileCreation">allow_profile_creation</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.property.domainName">domain_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.property.encryptionKey">encryption_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.property.expirationDays">expiration_days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.property.maxProfileObjectCount">max_profile_object_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.property.objectTypeName">object_type_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.property.sourceLastUpdatedTimestampFormat">source_last_updated_timestamp_format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.property.sourcePriority">source_priority</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.property.templateId">template_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `fields`<sup>Required</sup> <a name="fields" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.property.fields"></a>

```python
fields: CustomerprofilesObjectTypeFieldsList
```

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsList">CustomerprofilesObjectTypeFieldsList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `keys`<sup>Required</sup> <a name="keys" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.property.keys"></a>

```python
keys: CustomerprofilesObjectTypeKeysList
```

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysList">CustomerprofilesObjectTypeKeysList</a>

---

##### `last_updated_at`<sup>Required</sup> <a name="last_updated_at" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.property.lastUpdatedAt"></a>

```python
last_updated_at: str
```

- *Type:* str

---

##### `max_available_profile_object_count`<sup>Required</sup> <a name="max_available_profile_object_count" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.property.maxAvailableProfileObjectCount"></a>

```python
max_available_profile_object_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.property.tags"></a>

```python
tags: CustomerprofilesObjectTypeTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTagsList">CustomerprofilesObjectTypeTagsList</a>

---

##### `allow_profile_creation_input`<sup>Optional</sup> <a name="allow_profile_creation_input" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.property.allowProfileCreationInput"></a>

```python
allow_profile_creation_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `domain_name_input`<sup>Optional</sup> <a name="domain_name_input" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.property.domainNameInput"></a>

```python
domain_name_input: str
```

- *Type:* str

---

##### `encryption_key_input`<sup>Optional</sup> <a name="encryption_key_input" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.property.encryptionKeyInput"></a>

```python
encryption_key_input: str
```

- *Type:* str

---

##### `expiration_days_input`<sup>Optional</sup> <a name="expiration_days_input" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.property.expirationDaysInput"></a>

```python
expiration_days_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `fields_input`<sup>Optional</sup> <a name="fields_input" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.property.fieldsInput"></a>

```python
fields_input: IResolvable | typing.List[CustomerprofilesObjectTypeFields]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFields">CustomerprofilesObjectTypeFields</a>]

---

##### `keys_input`<sup>Optional</sup> <a name="keys_input" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.property.keysInput"></a>

```python
keys_input: IResolvable | typing.List[CustomerprofilesObjectTypeKeys]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeys">CustomerprofilesObjectTypeKeys</a>]

---

##### `max_profile_object_count_input`<sup>Optional</sup> <a name="max_profile_object_count_input" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.property.maxProfileObjectCountInput"></a>

```python
max_profile_object_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `object_type_name_input`<sup>Optional</sup> <a name="object_type_name_input" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.property.objectTypeNameInput"></a>

```python
object_type_name_input: str
```

- *Type:* str

---

##### `source_last_updated_timestamp_format_input`<sup>Optional</sup> <a name="source_last_updated_timestamp_format_input" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.property.sourceLastUpdatedTimestampFormatInput"></a>

```python
source_last_updated_timestamp_format_input: str
```

- *Type:* str

---

##### `source_priority_input`<sup>Optional</sup> <a name="source_priority_input" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.property.sourcePriorityInput"></a>

```python
source_priority_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[CustomerprofilesObjectTypeTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTags">CustomerprofilesObjectTypeTags</a>]

---

##### `template_id_input`<sup>Optional</sup> <a name="template_id_input" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.property.templateIdInput"></a>

```python
template_id_input: str
```

- *Type:* str

---

##### `allow_profile_creation`<sup>Required</sup> <a name="allow_profile_creation" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.property.allowProfileCreation"></a>

```python
allow_profile_creation: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `domain_name`<sup>Required</sup> <a name="domain_name" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.property.domainName"></a>

```python
domain_name: str
```

- *Type:* str

---

##### `encryption_key`<sup>Required</sup> <a name="encryption_key" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.property.encryptionKey"></a>

```python
encryption_key: str
```

- *Type:* str

---

##### `expiration_days`<sup>Required</sup> <a name="expiration_days" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.property.expirationDays"></a>

```python
expiration_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_profile_object_count`<sup>Required</sup> <a name="max_profile_object_count" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.property.maxProfileObjectCount"></a>

```python
max_profile_object_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `object_type_name`<sup>Required</sup> <a name="object_type_name" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.property.objectTypeName"></a>

```python
object_type_name: str
```

- *Type:* str

---

##### `source_last_updated_timestamp_format`<sup>Required</sup> <a name="source_last_updated_timestamp_format" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.property.sourceLastUpdatedTimestampFormat"></a>

```python
source_last_updated_timestamp_format: str
```

- *Type:* str

---

##### `source_priority`<sup>Required</sup> <a name="source_priority" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.property.sourcePriority"></a>

```python
source_priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `template_id`<sup>Required</sup> <a name="template_id" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.property.templateId"></a>

```python
template_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectType.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### CustomerprofilesObjectTypeConfig <a name="CustomerprofilesObjectTypeConfig" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeConfig.Initializer"></a>

```python
from cdktn_provider_awscc import customerprofiles_object_type

customerprofilesObjectType.CustomerprofilesObjectTypeConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  description: str,
  domain_name: str,
  object_type_name: str,
  allow_profile_creation: bool | IResolvable = None,
  encryption_key: str = None,
  expiration_days: typing.Union[int, float] = None,
  fields: IResolvable | typing.List[CustomerprofilesObjectTypeFields] = None,
  keys: IResolvable | typing.List[CustomerprofilesObjectTypeKeys] = None,
  max_profile_object_count: typing.Union[int, float] = None,
  source_last_updated_timestamp_format: str = None,
  source_priority: typing.Union[int, float] = None,
  tags: IResolvable | typing.List[CustomerprofilesObjectTypeTags] = None,
  template_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeConfig.property.description">description</a></code> | <code>str</code> | Description of the profile object type. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeConfig.property.domainName">domain_name</a></code> | <code>str</code> | The unique name of the domain. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeConfig.property.objectTypeName">object_type_name</a></code> | <code>str</code> | The name of the profile object type. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeConfig.property.allowProfileCreation">allow_profile_creation</a></code> | <code>bool \| cdktn.IResolvable</code> | Indicates whether a profile should be created when data is received. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeConfig.property.encryptionKey">encryption_key</a></code> | <code>str</code> | The default encryption key. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeConfig.property.expirationDays">expiration_days</a></code> | <code>typing.Union[int, float]</code> | The default number of days until the data within the domain expires. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeConfig.property.fields">fields</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFields">CustomerprofilesObjectTypeFields</a>]</code> | A list of the name and ObjectType field. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeConfig.property.keys">keys</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeys">CustomerprofilesObjectTypeKeys</a>]</code> | A list of unique keys that can be used to map data to the profile. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeConfig.property.maxProfileObjectCount">max_profile_object_count</a></code> | <code>typing.Union[int, float]</code> | The maximum number of profile objects for this object type. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeConfig.property.sourceLastUpdatedTimestampFormat">source_last_updated_timestamp_format</a></code> | <code>str</code> | The format of your sourceLastUpdatedTimestamp that was previously set up. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeConfig.property.sourcePriority">source_priority</a></code> | <code>typing.Union[int, float]</code> | Defines the priority order of object types. Lower value indicates higher priority. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTags">CustomerprofilesObjectTypeTags</a>]</code> | The tags (keys and values) associated with the integration. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeConfig.property.templateId">template_id</a></code> | <code>str</code> | A unique identifier for the object template. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Description of the profile object type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/customerprofiles_object_type#description CustomerprofilesObjectType#description}

---

##### `domain_name`<sup>Required</sup> <a name="domain_name" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeConfig.property.domainName"></a>

```python
domain_name: str
```

- *Type:* str

The unique name of the domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/customerprofiles_object_type#domain_name CustomerprofilesObjectType#domain_name}

---

##### `object_type_name`<sup>Required</sup> <a name="object_type_name" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeConfig.property.objectTypeName"></a>

```python
object_type_name: str
```

- *Type:* str

The name of the profile object type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/customerprofiles_object_type#object_type_name CustomerprofilesObjectType#object_type_name}

---

##### `allow_profile_creation`<sup>Optional</sup> <a name="allow_profile_creation" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeConfig.property.allowProfileCreation"></a>

```python
allow_profile_creation: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Indicates whether a profile should be created when data is received.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/customerprofiles_object_type#allow_profile_creation CustomerprofilesObjectType#allow_profile_creation}

---

##### `encryption_key`<sup>Optional</sup> <a name="encryption_key" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeConfig.property.encryptionKey"></a>

```python
encryption_key: str
```

- *Type:* str

The default encryption key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/customerprofiles_object_type#encryption_key CustomerprofilesObjectType#encryption_key}

---

##### `expiration_days`<sup>Optional</sup> <a name="expiration_days" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeConfig.property.expirationDays"></a>

```python
expiration_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The default number of days until the data within the domain expires.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/customerprofiles_object_type#expiration_days CustomerprofilesObjectType#expiration_days}

---

##### `fields`<sup>Optional</sup> <a name="fields" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeConfig.property.fields"></a>

```python
fields: IResolvable | typing.List[CustomerprofilesObjectTypeFields]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFields">CustomerprofilesObjectTypeFields</a>]

A list of the name and ObjectType field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/customerprofiles_object_type#fields CustomerprofilesObjectType#fields}

---

##### `keys`<sup>Optional</sup> <a name="keys" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeConfig.property.keys"></a>

```python
keys: IResolvable | typing.List[CustomerprofilesObjectTypeKeys]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeys">CustomerprofilesObjectTypeKeys</a>]

A list of unique keys that can be used to map data to the profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/customerprofiles_object_type#keys CustomerprofilesObjectType#keys}

---

##### `max_profile_object_count`<sup>Optional</sup> <a name="max_profile_object_count" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeConfig.property.maxProfileObjectCount"></a>

```python
max_profile_object_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The maximum number of profile objects for this object type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/customerprofiles_object_type#max_profile_object_count CustomerprofilesObjectType#max_profile_object_count}

---

##### `source_last_updated_timestamp_format`<sup>Optional</sup> <a name="source_last_updated_timestamp_format" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeConfig.property.sourceLastUpdatedTimestampFormat"></a>

```python
source_last_updated_timestamp_format: str
```

- *Type:* str

The format of your sourceLastUpdatedTimestamp that was previously set up.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/customerprofiles_object_type#source_last_updated_timestamp_format CustomerprofilesObjectType#source_last_updated_timestamp_format}

---

##### `source_priority`<sup>Optional</sup> <a name="source_priority" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeConfig.property.sourcePriority"></a>

```python
source_priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Defines the priority order of object types. Lower value indicates higher priority.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/customerprofiles_object_type#source_priority CustomerprofilesObjectType#source_priority}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[CustomerprofilesObjectTypeTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTags">CustomerprofilesObjectTypeTags</a>]

The tags (keys and values) associated with the integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/customerprofiles_object_type#tags CustomerprofilesObjectType#tags}

---

##### `template_id`<sup>Optional</sup> <a name="template_id" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeConfig.property.templateId"></a>

```python
template_id: str
```

- *Type:* str

A unique identifier for the object template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/customerprofiles_object_type#template_id CustomerprofilesObjectType#template_id}

---

### CustomerprofilesObjectTypeFields <a name="CustomerprofilesObjectTypeFields" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFields"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFields.Initializer"></a>

```python
from cdktn_provider_awscc import customerprofiles_object_type

customerprofilesObjectType.CustomerprofilesObjectTypeFields(
  name: str = None,
  object_type_field: CustomerprofilesObjectTypeFieldsObjectTypeField = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFields.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/customerprofiles_object_type#name CustomerprofilesObjectType#name}. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFields.property.objectTypeField">object_type_field</a></code> | <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsObjectTypeField">CustomerprofilesObjectTypeFieldsObjectTypeField</a></code> | Represents a field in a ProfileObjectType. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFields.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/customerprofiles_object_type#name CustomerprofilesObjectType#name}.

---

##### `object_type_field`<sup>Optional</sup> <a name="object_type_field" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFields.property.objectTypeField"></a>

```python
object_type_field: CustomerprofilesObjectTypeFieldsObjectTypeField
```

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsObjectTypeField">CustomerprofilesObjectTypeFieldsObjectTypeField</a>

Represents a field in a ProfileObjectType.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/customerprofiles_object_type#object_type_field CustomerprofilesObjectType#object_type_field}

---

### CustomerprofilesObjectTypeFieldsObjectTypeField <a name="CustomerprofilesObjectTypeFieldsObjectTypeField" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsObjectTypeField"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsObjectTypeField.Initializer"></a>

```python
from cdktn_provider_awscc import customerprofiles_object_type

customerprofilesObjectType.CustomerprofilesObjectTypeFieldsObjectTypeField(
  content_type: str = None,
  source: str = None,
  target: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsObjectTypeField.property.contentType">content_type</a></code> | <code>str</code> | The content type of the field. Used for determining equality when searching. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsObjectTypeField.property.source">source</a></code> | <code>str</code> | A field of a ProfileObject. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsObjectTypeField.property.target">target</a></code> | <code>str</code> | The location of the data in the standard ProfileObject model. For example: _profile.Address.PostalCode. |

---

##### `content_type`<sup>Optional</sup> <a name="content_type" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsObjectTypeField.property.contentType"></a>

```python
content_type: str
```

- *Type:* str

The content type of the field. Used for determining equality when searching.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/customerprofiles_object_type#content_type CustomerprofilesObjectType#content_type}

---

##### `source`<sup>Optional</sup> <a name="source" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsObjectTypeField.property.source"></a>

```python
source: str
```

- *Type:* str

A field of a ProfileObject.

For example: _source.FirstName, where "_source" is a ProfileObjectType of a Zendesk user and "FirstName" is a field in that ObjectType.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/customerprofiles_object_type#source CustomerprofilesObjectType#source}

---

##### `target`<sup>Optional</sup> <a name="target" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsObjectTypeField.property.target"></a>

```python
target: str
```

- *Type:* str

The location of the data in the standard ProfileObject model. For example: _profile.Address.PostalCode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/customerprofiles_object_type#target CustomerprofilesObjectType#target}

---

### CustomerprofilesObjectTypeKeys <a name="CustomerprofilesObjectTypeKeys" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeys"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeys.Initializer"></a>

```python
from cdktn_provider_awscc import customerprofiles_object_type

customerprofilesObjectType.CustomerprofilesObjectTypeKeys(
  name: str = None,
  object_type_key_list: IResolvable | typing.List[CustomerprofilesObjectTypeKeysObjectTypeKeyListStruct] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeys.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/customerprofiles_object_type#name CustomerprofilesObjectType#name}. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeys.property.objectTypeKeyList">object_type_key_list</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStruct">CustomerprofilesObjectTypeKeysObjectTypeKeyListStruct</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/customerprofiles_object_type#object_type_key_list CustomerprofilesObjectType#object_type_key_list}. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeys.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/customerprofiles_object_type#name CustomerprofilesObjectType#name}.

---

##### `object_type_key_list`<sup>Optional</sup> <a name="object_type_key_list" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeys.property.objectTypeKeyList"></a>

```python
object_type_key_list: IResolvable | typing.List[CustomerprofilesObjectTypeKeysObjectTypeKeyListStruct]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStruct">CustomerprofilesObjectTypeKeysObjectTypeKeyListStruct</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/customerprofiles_object_type#object_type_key_list CustomerprofilesObjectType#object_type_key_list}.

---

### CustomerprofilesObjectTypeKeysObjectTypeKeyListStruct <a name="CustomerprofilesObjectTypeKeysObjectTypeKeyListStruct" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStruct.Initializer"></a>

```python
from cdktn_provider_awscc import customerprofiles_object_type

customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStruct(
  field_names: typing.List[str] = None,
  standard_identifiers: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStruct.property.fieldNames">field_names</a></code> | <code>typing.List[str]</code> | The reference for the key name of the fields map. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStruct.property.standardIdentifiers">standard_identifiers</a></code> | <code>typing.List[str]</code> | The types of keys that a ProfileObject can have. |

---

##### `field_names`<sup>Optional</sup> <a name="field_names" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStruct.property.fieldNames"></a>

```python
field_names: typing.List[str]
```

- *Type:* typing.List[str]

The reference for the key name of the fields map.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/customerprofiles_object_type#field_names CustomerprofilesObjectType#field_names}

---

##### `standard_identifiers`<sup>Optional</sup> <a name="standard_identifiers" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStruct.property.standardIdentifiers"></a>

```python
standard_identifiers: typing.List[str]
```

- *Type:* typing.List[str]

The types of keys that a ProfileObject can have.

Each ProfileObject can have only 1 UNIQUE key but multiple PROFILE keys. PROFILE means that this key can be used to tie an object to a PROFILE. UNIQUE means that it can be used to uniquely identify an object. If a key a is marked as SECONDARY, it will be used to search for profiles after all other PROFILE keys have been searched. A LOOKUP_ONLY key is only used to match a profile but is not persisted to be used for searching of the profile. A NEW_ONLY key is only used if the profile does not already exist before the object is ingested, otherwise it is only used for matching objects to profiles.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/customerprofiles_object_type#standard_identifiers CustomerprofilesObjectType#standard_identifiers}

---

### CustomerprofilesObjectTypeTags <a name="CustomerprofilesObjectTypeTags" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTags.Initializer"></a>

```python
from cdktn_provider_awscc import customerprofiles_object_type

customerprofilesObjectType.CustomerprofilesObjectTypeTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTags.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/customerprofiles_object_type#key CustomerprofilesObjectType#key}. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTags.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/customerprofiles_object_type#value CustomerprofilesObjectType#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTags.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/customerprofiles_object_type#key CustomerprofilesObjectType#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTags.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/customerprofiles_object_type#value CustomerprofilesObjectType#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### CustomerprofilesObjectTypeFieldsList <a name="CustomerprofilesObjectTypeFieldsList" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsList.Initializer"></a>

```python
from cdktn_provider_awscc import customerprofiles_object_type

customerprofilesObjectType.CustomerprofilesObjectTypeFieldsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CustomerprofilesObjectTypeFieldsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFields">CustomerprofilesObjectTypeFields</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[CustomerprofilesObjectTypeFields]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFields">CustomerprofilesObjectTypeFields</a>]

---


### CustomerprofilesObjectTypeFieldsObjectTypeFieldOutputReference <a name="CustomerprofilesObjectTypeFieldsObjectTypeFieldOutputReference" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsObjectTypeFieldOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsObjectTypeFieldOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import customerprofiles_object_type

customerprofilesObjectType.CustomerprofilesObjectTypeFieldsObjectTypeFieldOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsObjectTypeFieldOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsObjectTypeFieldOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsObjectTypeFieldOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsObjectTypeFieldOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsObjectTypeFieldOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsObjectTypeFieldOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsObjectTypeFieldOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsObjectTypeFieldOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsObjectTypeFieldOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsObjectTypeFieldOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsObjectTypeFieldOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsObjectTypeFieldOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsObjectTypeFieldOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsObjectTypeFieldOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsObjectTypeFieldOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsObjectTypeFieldOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsObjectTypeFieldOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsObjectTypeFieldOutputReference.resetContentType">reset_content_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsObjectTypeFieldOutputReference.resetSource">reset_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsObjectTypeFieldOutputReference.resetTarget">reset_target</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsObjectTypeFieldOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsObjectTypeFieldOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsObjectTypeFieldOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsObjectTypeFieldOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsObjectTypeFieldOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsObjectTypeFieldOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsObjectTypeFieldOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsObjectTypeFieldOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsObjectTypeFieldOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsObjectTypeFieldOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsObjectTypeFieldOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsObjectTypeFieldOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsObjectTypeFieldOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsObjectTypeFieldOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsObjectTypeFieldOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsObjectTypeFieldOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsObjectTypeFieldOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsObjectTypeFieldOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsObjectTypeFieldOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsObjectTypeFieldOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsObjectTypeFieldOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsObjectTypeFieldOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsObjectTypeFieldOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsObjectTypeFieldOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_content_type` <a name="reset_content_type" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsObjectTypeFieldOutputReference.resetContentType"></a>

```python
def reset_content_type() -> None
```

##### `reset_source` <a name="reset_source" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsObjectTypeFieldOutputReference.resetSource"></a>

```python
def reset_source() -> None
```

##### `reset_target` <a name="reset_target" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsObjectTypeFieldOutputReference.resetTarget"></a>

```python
def reset_target() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsObjectTypeFieldOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsObjectTypeFieldOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsObjectTypeFieldOutputReference.property.contentTypeInput">content_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsObjectTypeFieldOutputReference.property.sourceInput">source_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsObjectTypeFieldOutputReference.property.targetInput">target_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsObjectTypeFieldOutputReference.property.contentType">content_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsObjectTypeFieldOutputReference.property.source">source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsObjectTypeFieldOutputReference.property.target">target</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsObjectTypeFieldOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsObjectTypeField">CustomerprofilesObjectTypeFieldsObjectTypeField</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsObjectTypeFieldOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsObjectTypeFieldOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `content_type_input`<sup>Optional</sup> <a name="content_type_input" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsObjectTypeFieldOutputReference.property.contentTypeInput"></a>

```python
content_type_input: str
```

- *Type:* str

---

##### `source_input`<sup>Optional</sup> <a name="source_input" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsObjectTypeFieldOutputReference.property.sourceInput"></a>

```python
source_input: str
```

- *Type:* str

---

##### `target_input`<sup>Optional</sup> <a name="target_input" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsObjectTypeFieldOutputReference.property.targetInput"></a>

```python
target_input: str
```

- *Type:* str

---

##### `content_type`<sup>Required</sup> <a name="content_type" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsObjectTypeFieldOutputReference.property.contentType"></a>

```python
content_type: str
```

- *Type:* str

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsObjectTypeFieldOutputReference.property.source"></a>

```python
source: str
```

- *Type:* str

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsObjectTypeFieldOutputReference.property.target"></a>

```python
target: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsObjectTypeFieldOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CustomerprofilesObjectTypeFieldsObjectTypeField
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsObjectTypeField">CustomerprofilesObjectTypeFieldsObjectTypeField</a>

---


### CustomerprofilesObjectTypeFieldsOutputReference <a name="CustomerprofilesObjectTypeFieldsOutputReference" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import customerprofiles_object_type

customerprofilesObjectType.CustomerprofilesObjectTypeFieldsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsOutputReference.putObjectTypeField">put_object_type_field</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsOutputReference.resetObjectTypeField">reset_object_type_field</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_object_type_field` <a name="put_object_type_field" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsOutputReference.putObjectTypeField"></a>

```python
def put_object_type_field(
  content_type: str = None,
  source: str = None,
  target: str = None
) -> None
```

###### `content_type`<sup>Optional</sup> <a name="content_type" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsOutputReference.putObjectTypeField.parameter.contentType"></a>

- *Type:* str

The content type of the field. Used for determining equality when searching.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/customerprofiles_object_type#content_type CustomerprofilesObjectType#content_type}

---

###### `source`<sup>Optional</sup> <a name="source" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsOutputReference.putObjectTypeField.parameter.source"></a>

- *Type:* str

A field of a ProfileObject.

For example: _source.FirstName, where "_source" is a ProfileObjectType of a Zendesk user and "FirstName" is a field in that ObjectType.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/customerprofiles_object_type#source CustomerprofilesObjectType#source}

---

###### `target`<sup>Optional</sup> <a name="target" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsOutputReference.putObjectTypeField.parameter.target"></a>

- *Type:* str

The location of the data in the standard ProfileObject model. For example: _profile.Address.PostalCode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/customerprofiles_object_type#target CustomerprofilesObjectType#target}

---

##### `reset_name` <a name="reset_name" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_object_type_field` <a name="reset_object_type_field" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsOutputReference.resetObjectTypeField"></a>

```python
def reset_object_type_field() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsOutputReference.property.objectTypeField">object_type_field</a></code> | <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsObjectTypeFieldOutputReference">CustomerprofilesObjectTypeFieldsObjectTypeFieldOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsOutputReference.property.objectTypeFieldInput">object_type_field_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsObjectTypeField">CustomerprofilesObjectTypeFieldsObjectTypeField</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFields">CustomerprofilesObjectTypeFields</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `object_type_field`<sup>Required</sup> <a name="object_type_field" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsOutputReference.property.objectTypeField"></a>

```python
object_type_field: CustomerprofilesObjectTypeFieldsObjectTypeFieldOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsObjectTypeFieldOutputReference">CustomerprofilesObjectTypeFieldsObjectTypeFieldOutputReference</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `object_type_field_input`<sup>Optional</sup> <a name="object_type_field_input" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsOutputReference.property.objectTypeFieldInput"></a>

```python
object_type_field_input: IResolvable | CustomerprofilesObjectTypeFieldsObjectTypeField
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsObjectTypeField">CustomerprofilesObjectTypeFieldsObjectTypeField</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFieldsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CustomerprofilesObjectTypeFields
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeFields">CustomerprofilesObjectTypeFields</a>

---


### CustomerprofilesObjectTypeKeysList <a name="CustomerprofilesObjectTypeKeysList" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysList.Initializer"></a>

```python
from cdktn_provider_awscc import customerprofiles_object_type

customerprofilesObjectType.CustomerprofilesObjectTypeKeysList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CustomerprofilesObjectTypeKeysOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeys">CustomerprofilesObjectTypeKeys</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[CustomerprofilesObjectTypeKeys]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeys">CustomerprofilesObjectTypeKeys</a>]

---


### CustomerprofilesObjectTypeKeysObjectTypeKeyListStructList <a name="CustomerprofilesObjectTypeKeysObjectTypeKeyListStructList" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStructList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStructList.Initializer"></a>

```python
from cdktn_provider_awscc import customerprofiles_object_type

customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStructList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStructList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStructList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStructList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStructList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStructList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStructList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStructList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStructList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStructList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStructList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStructList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStructList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStructList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStructList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CustomerprofilesObjectTypeKeysObjectTypeKeyListStructOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStructList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStructList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStructList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStructList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStruct">CustomerprofilesObjectTypeKeysObjectTypeKeyListStruct</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStructList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStructList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStructList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[CustomerprofilesObjectTypeKeysObjectTypeKeyListStruct]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStruct">CustomerprofilesObjectTypeKeysObjectTypeKeyListStruct</a>]

---


### CustomerprofilesObjectTypeKeysObjectTypeKeyListStructOutputReference <a name="CustomerprofilesObjectTypeKeysObjectTypeKeyListStructOutputReference" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStructOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import customerprofiles_object_type

customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStructOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStructOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStructOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStructOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStructOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStructOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStructOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStructOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStructOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStructOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStructOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStructOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStructOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStructOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStructOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStructOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStructOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStructOutputReference.resetFieldNames">reset_field_names</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStructOutputReference.resetStandardIdentifiers">reset_standard_identifiers</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStructOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStructOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStructOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStructOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStructOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStructOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStructOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStructOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStructOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStructOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStructOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStructOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStructOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStructOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_field_names` <a name="reset_field_names" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStructOutputReference.resetFieldNames"></a>

```python
def reset_field_names() -> None
```

##### `reset_standard_identifiers` <a name="reset_standard_identifiers" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStructOutputReference.resetStandardIdentifiers"></a>

```python
def reset_standard_identifiers() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStructOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStructOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStructOutputReference.property.fieldNamesInput">field_names_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStructOutputReference.property.standardIdentifiersInput">standard_identifiers_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStructOutputReference.property.fieldNames">field_names</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStructOutputReference.property.standardIdentifiers">standard_identifiers</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStructOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStruct">CustomerprofilesObjectTypeKeysObjectTypeKeyListStruct</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStructOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStructOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `field_names_input`<sup>Optional</sup> <a name="field_names_input" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStructOutputReference.property.fieldNamesInput"></a>

```python
field_names_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `standard_identifiers_input`<sup>Optional</sup> <a name="standard_identifiers_input" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStructOutputReference.property.standardIdentifiersInput"></a>

```python
standard_identifiers_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `field_names`<sup>Required</sup> <a name="field_names" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStructOutputReference.property.fieldNames"></a>

```python
field_names: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `standard_identifiers`<sup>Required</sup> <a name="standard_identifiers" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStructOutputReference.property.standardIdentifiers"></a>

```python
standard_identifiers: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStructOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CustomerprofilesObjectTypeKeysObjectTypeKeyListStruct
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStruct">CustomerprofilesObjectTypeKeysObjectTypeKeyListStruct</a>

---


### CustomerprofilesObjectTypeKeysOutputReference <a name="CustomerprofilesObjectTypeKeysOutputReference" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import customerprofiles_object_type

customerprofilesObjectType.CustomerprofilesObjectTypeKeysOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysOutputReference.putObjectTypeKeyList">put_object_type_key_list</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysOutputReference.resetObjectTypeKeyList">reset_object_type_key_list</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_object_type_key_list` <a name="put_object_type_key_list" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysOutputReference.putObjectTypeKeyList"></a>

```python
def put_object_type_key_list(
  value: IResolvable | typing.List[CustomerprofilesObjectTypeKeysObjectTypeKeyListStruct]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysOutputReference.putObjectTypeKeyList.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStruct">CustomerprofilesObjectTypeKeysObjectTypeKeyListStruct</a>]

---

##### `reset_name` <a name="reset_name" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_object_type_key_list` <a name="reset_object_type_key_list" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysOutputReference.resetObjectTypeKeyList"></a>

```python
def reset_object_type_key_list() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysOutputReference.property.objectTypeKeyList">object_type_key_list</a></code> | <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStructList">CustomerprofilesObjectTypeKeysObjectTypeKeyListStructList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysOutputReference.property.objectTypeKeyListInput">object_type_key_list_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStruct">CustomerprofilesObjectTypeKeysObjectTypeKeyListStruct</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeys">CustomerprofilesObjectTypeKeys</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `object_type_key_list`<sup>Required</sup> <a name="object_type_key_list" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysOutputReference.property.objectTypeKeyList"></a>

```python
object_type_key_list: CustomerprofilesObjectTypeKeysObjectTypeKeyListStructList
```

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStructList">CustomerprofilesObjectTypeKeysObjectTypeKeyListStructList</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `object_type_key_list_input`<sup>Optional</sup> <a name="object_type_key_list_input" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysOutputReference.property.objectTypeKeyListInput"></a>

```python
object_type_key_list_input: IResolvable | typing.List[CustomerprofilesObjectTypeKeysObjectTypeKeyListStruct]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysObjectTypeKeyListStruct">CustomerprofilesObjectTypeKeysObjectTypeKeyListStruct</a>]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeysOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CustomerprofilesObjectTypeKeys
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeKeys">CustomerprofilesObjectTypeKeys</a>

---


### CustomerprofilesObjectTypeTagsList <a name="CustomerprofilesObjectTypeTagsList" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import customerprofiles_object_type

customerprofilesObjectType.CustomerprofilesObjectTypeTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CustomerprofilesObjectTypeTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTags">CustomerprofilesObjectTypeTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[CustomerprofilesObjectTypeTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTags">CustomerprofilesObjectTypeTags</a>]

---


### CustomerprofilesObjectTypeTagsOutputReference <a name="CustomerprofilesObjectTypeTagsOutputReference" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import customerprofiles_object_type

customerprofilesObjectType.CustomerprofilesObjectTypeTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTags">CustomerprofilesObjectTypeTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CustomerprofilesObjectTypeTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.customerprofilesObjectType.CustomerprofilesObjectTypeTags">CustomerprofilesObjectTypeTags</a>

---



