# `customerprofilesDomainObjectType` Submodule <a name="`customerprofilesDomainObjectType` Submodule" id="@cdktn/provider-awscc.customerprofilesDomainObjectType"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CustomerprofilesDomainObjectType <a name="CustomerprofilesDomainObjectType" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/customerprofiles_domain_object_type awscc_customerprofiles_domain_object_type}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.Initializer"></a>

```python
from cdktn_provider_awscc import customerprofiles_domain_object_type

customerprofilesDomainObjectType.CustomerprofilesDomainObjectType(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  domain_name: str,
  fields: IResolvable | typing.Mapping[CustomerprofilesDomainObjectTypeFields],
  object_type_name: str,
  description: str = None,
  encryption_key: str = None,
  tags: IResolvable | typing.List[CustomerprofilesDomainObjectTypeTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.Initializer.parameter.domainName">domain_name</a></code> | <code>str</code> | The unique name of the domain. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.Initializer.parameter.fields">fields</a></code> | <code>cdktn.IResolvable \| typing.Mapping[<a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFields">CustomerprofilesDomainObjectTypeFields</a>]</code> | A map of the name and ObjectType field. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.Initializer.parameter.objectTypeName">object_type_name</a></code> | <code>str</code> | The name of the domain object type. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.Initializer.parameter.description">description</a></code> | <code>str</code> | Description of the domain object type. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.Initializer.parameter.encryptionKey">encryption_key</a></code> | <code>str</code> | The default encryption key. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTags">CustomerprofilesDomainObjectTypeTags</a>]</code> | An array of key-value pairs to apply to this resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `domain_name`<sup>Required</sup> <a name="domain_name" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.Initializer.parameter.domainName"></a>

- *Type:* str

The unique name of the domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/customerprofiles_domain_object_type#domain_name CustomerprofilesDomainObjectType#domain_name}

---

##### `fields`<sup>Required</sup> <a name="fields" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.Initializer.parameter.fields"></a>

- *Type:* cdktn.IResolvable | typing.Mapping[<a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFields">CustomerprofilesDomainObjectTypeFields</a>]

A map of the name and ObjectType field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/customerprofiles_domain_object_type#fields CustomerprofilesDomainObjectType#fields}

---

##### `object_type_name`<sup>Required</sup> <a name="object_type_name" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.Initializer.parameter.objectTypeName"></a>

- *Type:* str

The name of the domain object type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/customerprofiles_domain_object_type#object_type_name CustomerprofilesDomainObjectType#object_type_name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.Initializer.parameter.description"></a>

- *Type:* str

Description of the domain object type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/customerprofiles_domain_object_type#description CustomerprofilesDomainObjectType#description}

---

##### `encryption_key`<sup>Optional</sup> <a name="encryption_key" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.Initializer.parameter.encryptionKey"></a>

- *Type:* str

The default encryption key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/customerprofiles_domain_object_type#encryption_key CustomerprofilesDomainObjectType#encryption_key}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTags">CustomerprofilesDomainObjectTypeTags</a>]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/customerprofiles_domain_object_type#tags CustomerprofilesDomainObjectType#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.putFields">put_fields</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.resetEncryptionKey">reset_encryption_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_fields` <a name="put_fields" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.putFields"></a>

```python
def put_fields(
  value: IResolvable | typing.Mapping[CustomerprofilesDomainObjectTypeFields]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.putFields.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.Mapping[<a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFields">CustomerprofilesDomainObjectTypeFields</a>]

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[CustomerprofilesDomainObjectTypeTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTags">CustomerprofilesDomainObjectTypeTags</a>]

---

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_encryption_key` <a name="reset_encryption_key" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.resetEncryptionKey"></a>

```python
def reset_encryption_key() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a CustomerprofilesDomainObjectType resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.isConstruct"></a>

```python
from cdktn_provider_awscc import customerprofiles_domain_object_type

customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.isTerraformElement"></a>

```python
from cdktn_provider_awscc import customerprofiles_domain_object_type

customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.isTerraformResource"></a>

```python
from cdktn_provider_awscc import customerprofiles_domain_object_type

customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import customerprofiles_domain_object_type

customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a CustomerprofilesDomainObjectType resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the CustomerprofilesDomainObjectType to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing CustomerprofilesDomainObjectType that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/customerprofiles_domain_object_type#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the CustomerprofilesDomainObjectType to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.property.fields">fields</a></code> | <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsMap">CustomerprofilesDomainObjectTypeFieldsMap</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.property.lastUpdatedAt">last_updated_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsList">CustomerprofilesDomainObjectTypeTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.property.domainNameInput">domain_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.property.encryptionKeyInput">encryption_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.property.fieldsInput">fields_input</a></code> | <code>cdktn.IResolvable \| typing.Mapping[<a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFields">CustomerprofilesDomainObjectTypeFields</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.property.objectTypeNameInput">object_type_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTags">CustomerprofilesDomainObjectTypeTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.property.domainName">domain_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.property.encryptionKey">encryption_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.property.objectTypeName">object_type_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `fields`<sup>Required</sup> <a name="fields" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.property.fields"></a>

```python
fields: CustomerprofilesDomainObjectTypeFieldsMap
```

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsMap">CustomerprofilesDomainObjectTypeFieldsMap</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `last_updated_at`<sup>Required</sup> <a name="last_updated_at" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.property.lastUpdatedAt"></a>

```python
last_updated_at: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.property.tags"></a>

```python
tags: CustomerprofilesDomainObjectTypeTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsList">CustomerprofilesDomainObjectTypeTagsList</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `domain_name_input`<sup>Optional</sup> <a name="domain_name_input" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.property.domainNameInput"></a>

```python
domain_name_input: str
```

- *Type:* str

---

##### `encryption_key_input`<sup>Optional</sup> <a name="encryption_key_input" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.property.encryptionKeyInput"></a>

```python
encryption_key_input: str
```

- *Type:* str

---

##### `fields_input`<sup>Optional</sup> <a name="fields_input" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.property.fieldsInput"></a>

```python
fields_input: IResolvable | typing.Mapping[CustomerprofilesDomainObjectTypeFields]
```

- *Type:* cdktn.IResolvable | typing.Mapping[<a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFields">CustomerprofilesDomainObjectTypeFields</a>]

---

##### `object_type_name_input`<sup>Optional</sup> <a name="object_type_name_input" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.property.objectTypeNameInput"></a>

```python
object_type_name_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[CustomerprofilesDomainObjectTypeTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTags">CustomerprofilesDomainObjectTypeTags</a>]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `domain_name`<sup>Required</sup> <a name="domain_name" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.property.domainName"></a>

```python
domain_name: str
```

- *Type:* str

---

##### `encryption_key`<sup>Required</sup> <a name="encryption_key" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.property.encryptionKey"></a>

```python
encryption_key: str
```

- *Type:* str

---

##### `object_type_name`<sup>Required</sup> <a name="object_type_name" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.property.objectTypeName"></a>

```python
object_type_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### CustomerprofilesDomainObjectTypeConfig <a name="CustomerprofilesDomainObjectTypeConfig" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeConfig.Initializer"></a>

```python
from cdktn_provider_awscc import customerprofiles_domain_object_type

customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  domain_name: str,
  fields: IResolvable | typing.Mapping[CustomerprofilesDomainObjectTypeFields],
  object_type_name: str,
  description: str = None,
  encryption_key: str = None,
  tags: IResolvable | typing.List[CustomerprofilesDomainObjectTypeTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeConfig.property.domainName">domain_name</a></code> | <code>str</code> | The unique name of the domain. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeConfig.property.fields">fields</a></code> | <code>cdktn.IResolvable \| typing.Mapping[<a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFields">CustomerprofilesDomainObjectTypeFields</a>]</code> | A map of the name and ObjectType field. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeConfig.property.objectTypeName">object_type_name</a></code> | <code>str</code> | The name of the domain object type. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeConfig.property.description">description</a></code> | <code>str</code> | Description of the domain object type. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeConfig.property.encryptionKey">encryption_key</a></code> | <code>str</code> | The default encryption key. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTags">CustomerprofilesDomainObjectTypeTags</a>]</code> | An array of key-value pairs to apply to this resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `domain_name`<sup>Required</sup> <a name="domain_name" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeConfig.property.domainName"></a>

```python
domain_name: str
```

- *Type:* str

The unique name of the domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/customerprofiles_domain_object_type#domain_name CustomerprofilesDomainObjectType#domain_name}

---

##### `fields`<sup>Required</sup> <a name="fields" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeConfig.property.fields"></a>

```python
fields: IResolvable | typing.Mapping[CustomerprofilesDomainObjectTypeFields]
```

- *Type:* cdktn.IResolvable | typing.Mapping[<a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFields">CustomerprofilesDomainObjectTypeFields</a>]

A map of the name and ObjectType field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/customerprofiles_domain_object_type#fields CustomerprofilesDomainObjectType#fields}

---

##### `object_type_name`<sup>Required</sup> <a name="object_type_name" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeConfig.property.objectTypeName"></a>

```python
object_type_name: str
```

- *Type:* str

The name of the domain object type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/customerprofiles_domain_object_type#object_type_name CustomerprofilesDomainObjectType#object_type_name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Description of the domain object type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/customerprofiles_domain_object_type#description CustomerprofilesDomainObjectType#description}

---

##### `encryption_key`<sup>Optional</sup> <a name="encryption_key" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeConfig.property.encryptionKey"></a>

```python
encryption_key: str
```

- *Type:* str

The default encryption key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/customerprofiles_domain_object_type#encryption_key CustomerprofilesDomainObjectType#encryption_key}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[CustomerprofilesDomainObjectTypeTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTags">CustomerprofilesDomainObjectTypeTags</a>]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/customerprofiles_domain_object_type#tags CustomerprofilesDomainObjectType#tags}

---

### CustomerprofilesDomainObjectTypeFields <a name="CustomerprofilesDomainObjectTypeFields" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFields"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFields.Initializer"></a>

```python
from cdktn_provider_awscc import customerprofiles_domain_object_type

customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFields(
  content_type: str = None,
  feature_type: str = None,
  source: str = None,
  target: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFields.property.contentType">content_type</a></code> | <code>str</code> | The content type of the field. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFields.property.featureType">feature_type</a></code> | <code>str</code> | The feature type of the field. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFields.property.source">source</a></code> | <code>str</code> | The source field name. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFields.property.target">target</a></code> | <code>str</code> | The target field name. |

---

##### `content_type`<sup>Optional</sup> <a name="content_type" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFields.property.contentType"></a>

```python
content_type: str
```

- *Type:* str

The content type of the field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/customerprofiles_domain_object_type#content_type CustomerprofilesDomainObjectType#content_type}

---

##### `feature_type`<sup>Optional</sup> <a name="feature_type" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFields.property.featureType"></a>

```python
feature_type: str
```

- *Type:* str

The feature type of the field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/customerprofiles_domain_object_type#feature_type CustomerprofilesDomainObjectType#feature_type}

---

##### `source`<sup>Optional</sup> <a name="source" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFields.property.source"></a>

```python
source: str
```

- *Type:* str

The source field name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/customerprofiles_domain_object_type#source CustomerprofilesDomainObjectType#source}

---

##### `target`<sup>Optional</sup> <a name="target" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFields.property.target"></a>

```python
target: str
```

- *Type:* str

The target field name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/customerprofiles_domain_object_type#target CustomerprofilesDomainObjectType#target}

---

### CustomerprofilesDomainObjectTypeTags <a name="CustomerprofilesDomainObjectTypeTags" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTags.Initializer"></a>

```python
from cdktn_provider_awscc import customerprofiles_domain_object_type

customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTags.property.key">key</a></code> | <code>str</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTags.property.value">value</a></code> | <code>str</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTags.property.key"></a>

```python
key: str
```

- *Type:* str

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/customerprofiles_domain_object_type#key CustomerprofilesDomainObjectType#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTags.property.value"></a>

```python
value: str
```

- *Type:* str

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/customerprofiles_domain_object_type#value CustomerprofilesDomainObjectType#value}

---

## Classes <a name="Classes" id="Classes"></a>

### CustomerprofilesDomainObjectTypeFieldsMap <a name="CustomerprofilesDomainObjectTypeFieldsMap" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsMap"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsMap.Initializer"></a>

```python
from cdktn_provider_awscc import customerprofiles_domain_object_type

customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsMap(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsMap.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsMap.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsMap.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsMap.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsMap.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsMap.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsMap.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsMap.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsMap.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsMap.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsMap.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsMap.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsMap.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsMap.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsMap.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsMap.get"></a>

```python
def get(
  key: str
) -> CustomerprofilesDomainObjectTypeFieldsOutputReference
```

###### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsMap.get.parameter.key"></a>

- *Type:* str

the key of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsMap.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsMap.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsMap.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.Mapping[<a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFields">CustomerprofilesDomainObjectTypeFields</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsMap.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsMap.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsMap.property.internalValue"></a>

```python
internal_value: IResolvable | typing.Mapping[CustomerprofilesDomainObjectTypeFields]
```

- *Type:* cdktn.IResolvable | typing.Mapping[<a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFields">CustomerprofilesDomainObjectTypeFields</a>]

---


### CustomerprofilesDomainObjectTypeFieldsOutputReference <a name="CustomerprofilesDomainObjectTypeFieldsOutputReference" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import customerprofiles_domain_object_type

customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_key: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsOutputReference.Initializer.parameter.complexObjectKey">complex_object_key</a></code> | <code>str</code> | the key of this item in the map. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_key`<sup>Required</sup> <a name="complex_object_key" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsOutputReference.Initializer.parameter.complexObjectKey"></a>

- *Type:* str

the key of this item in the map.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsOutputReference.resetContentType">reset_content_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsOutputReference.resetFeatureType">reset_feature_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsOutputReference.resetSource">reset_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsOutputReference.resetTarget">reset_target</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_content_type` <a name="reset_content_type" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsOutputReference.resetContentType"></a>

```python
def reset_content_type() -> None
```

##### `reset_feature_type` <a name="reset_feature_type" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsOutputReference.resetFeatureType"></a>

```python
def reset_feature_type() -> None
```

##### `reset_source` <a name="reset_source" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsOutputReference.resetSource"></a>

```python
def reset_source() -> None
```

##### `reset_target` <a name="reset_target" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsOutputReference.resetTarget"></a>

```python
def reset_target() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsOutputReference.property.contentTypeInput">content_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsOutputReference.property.featureTypeInput">feature_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsOutputReference.property.sourceInput">source_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsOutputReference.property.targetInput">target_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsOutputReference.property.contentType">content_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsOutputReference.property.featureType">feature_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsOutputReference.property.source">source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsOutputReference.property.target">target</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFields">CustomerprofilesDomainObjectTypeFields</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `content_type_input`<sup>Optional</sup> <a name="content_type_input" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsOutputReference.property.contentTypeInput"></a>

```python
content_type_input: str
```

- *Type:* str

---

##### `feature_type_input`<sup>Optional</sup> <a name="feature_type_input" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsOutputReference.property.featureTypeInput"></a>

```python
feature_type_input: str
```

- *Type:* str

---

##### `source_input`<sup>Optional</sup> <a name="source_input" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsOutputReference.property.sourceInput"></a>

```python
source_input: str
```

- *Type:* str

---

##### `target_input`<sup>Optional</sup> <a name="target_input" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsOutputReference.property.targetInput"></a>

```python
target_input: str
```

- *Type:* str

---

##### `content_type`<sup>Required</sup> <a name="content_type" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsOutputReference.property.contentType"></a>

```python
content_type: str
```

- *Type:* str

---

##### `feature_type`<sup>Required</sup> <a name="feature_type" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsOutputReference.property.featureType"></a>

```python
feature_type: str
```

- *Type:* str

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsOutputReference.property.source"></a>

```python
source: str
```

- *Type:* str

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsOutputReference.property.target"></a>

```python
target: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CustomerprofilesDomainObjectTypeFields
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFields">CustomerprofilesDomainObjectTypeFields</a>

---


### CustomerprofilesDomainObjectTypeTagsList <a name="CustomerprofilesDomainObjectTypeTagsList" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import customerprofiles_domain_object_type

customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CustomerprofilesDomainObjectTypeTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTags">CustomerprofilesDomainObjectTypeTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[CustomerprofilesDomainObjectTypeTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTags">CustomerprofilesDomainObjectTypeTags</a>]

---


### CustomerprofilesDomainObjectTypeTagsOutputReference <a name="CustomerprofilesDomainObjectTypeTagsOutputReference" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import customerprofiles_domain_object_type

customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTags">CustomerprofilesDomainObjectTypeTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CustomerprofilesDomainObjectTypeTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTags">CustomerprofilesDomainObjectTypeTags</a>

---



